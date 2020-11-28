import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { StudentHomeService } from '@studentServices/home/home.service';

@Component({
  	selector: 'app-student-home',
  	templateUrl: './home.component.html',
  	styleUrls: ['./home.component.scss']
})
export class StudentHomeComponent implements OnInit {

	semisters : any = [];
	semistersDataStatus : number = 2;
	selectedSemister : any = {};
	isSemisterSelected : boolean = false;
	subjectsDataStatus : number = 2;
	subjects : any = [];
	selectedSubject : any = {};
	isSubjectSelected : boolean = false;

    constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	public router: Router,
	private studentHomeService : StudentHomeService) { };

	ngOnInit() {
		this.getSemistersList();
	};

	resetSemistersList() {
		this.semistersDataStatus = 2;
		this.semisters = [];
		this.loader.showLoader();
	};

	getSemistersList() {
		this.resetSemistersList();
		this.studentHomeService.getSemistersList()
		.then((response:any) => {
			this.loader.hideLoader();
			this.semistersDataStatus = 1;
			this.semisters = response.inst_class;
		}, () => {
			this.loader.hideLoader();
			this.semistersDataStatus = 0;
		});
	};

	selectSemister(semister) {
		this.isSemisterSelected = true;
		this.selectedSemister = semister;
		this.getSubjects();
	};

	resetSubjectsList() {
		this.subjectsDataStatus = 2;
		this.subjects = [];
		this.loader.showLoader();
	};

	getSubjects() {
		this.resetSubjectsList();
		this.studentHomeService.getSubjectsList(this.selectedSemister)
		.then((response:any) => {
			this.loader.hideLoader();
			this.subjectsDataStatus = 1;
			this.subjects = response[0].subjects.data;
		}, () => {
			this.loader.hideLoader();
			this.subjectsDataStatus = 0;
		});
	};

	selectSubject(subject) {
		this.isSubjectSelected = true;
		this.selectedSubject = subject;
		this.router.navigate(['student/chapters', this.selectedSubject.id]);
	};
}
