import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Constants } from '@app/constants';
import { DownloadService } from '@sharedServices/download/download.service';
import { MiscellaneousService } from '@sharedServices/miscellaneous/miscellaneous.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { StudentSubjectService } from '@studentServices/subject/subject.service';
declare var $: any; 
import { FormGroup, FormControl } from '@angular/forms';
import { StorageService } from '@sharedServices/storage/storage.service';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { TranslateService } from '@ngx-translate/core';
import { SessionHandlerService } from '@sharedServices/sessionHandler/sessionHandler.service';




@Component({
  	selector: 'app-student-subject',
  	templateUrl: './subject.component.html',
  	styleUrls: ['./subject.component.scss']
})
export class StudentSubjectComponent implements OnInit{

	subjectsDataStatus : number = 2;
	subjects : any = [];
	selectedSemester : any = {};
	featureType : number;
	verifyForm : FormGroup;
	userDetails : any = {};

	constructor(public _constants : Constants,
	public _download : DownloadService,
	public _miscellaneous : MiscellaneousService,
	private _loader: LoaderService,
	private _router: Router,
	private storageService : StorageService,
	private toaster: ToasterService,
	private translate: TranslateService,
	private _session : SessionHandlerService,
	private _subjects : StudentSubjectService) { 
		this.verifyForm = new FormGroup({
			'email' : new FormControl("", [])
			});
	}
	
	ngOnInit() {
		this.userDetails = this.storageService.getData("userDetails");
		if(!this.userDetails.is_verified){
			$('#myModal').modal({
				backdrop: 'static',
				keyboard: false
			});
			$('#myModal').modal('show');
		}
		this.featureType = (this._router.url === "/student/home") ? 1 : 2;
	}

	onSemesterSelection(semester) {
		this.selectedSemester = semester;
		this.getSubjects();
	};
	 
	resetSubjectsList() {
		this.subjectsDataStatus = 2;
		this.subjects = [];
		this._loader.showLoader();
	};

	getSubjects() {
		this.resetSubjectsList();
		this._subjects.getSubjectsList(this.selectedSemester)
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.subjectsDataStatus = 1;
			this.subjects = response[0].subjects.data;
		}, (errorCode) => {
			this._loader.hideLoader();
			this.subjectsDataStatus = errorCode;
		});
	};

	onSubjectSelection(subject) {
		let data = {};
		data['contentType'] = this.featureType;
		this._router.navigate(['student/contents', subject.id],{ queryParams: data });
	};

	validateVerifyFormValue(formName) {
		return this.verifyForm.get(formName); 
	};

	verifyAccount()
	{
		let data = this.verifyForm.value;
		data.usn=this.userDetails.usn;
		data.type=this.userDetails.type;
		this._loader.showLoader();
		this._subjects.verifyAccount(data)
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.toaster.showSuccess(response.status.message);
			this.logout();
		}, (errorCode) => {
			this._loader.hideLoader();
		});
	}

	logout() {
		this._session.handleLogout();
	};
	
}
