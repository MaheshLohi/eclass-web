import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Constants } from '@app/constants';
import { DownloadService } from '@sharedServices/download/download.service';
import { MiscellaneousService } from '@sharedServices/miscellaneous/miscellaneous.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { StudentSubjectService } from '@studentServices/subject/subject.service';

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

	constructor(public _constants : Constants,
	public _download : DownloadService,
	public _miscellaneous : MiscellaneousService,
	private _loader: LoaderService,
	private _router: Router,
	private _subjects : StudentSubjectService) { };

	ngOnInit() {
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

}
