import { Component, OnChanges, SimpleChanges, Output, EventEmitter, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { StudentSubjectService } from '@studentServices/subject/subject.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  	selector: 'app-student-subject',
  	templateUrl: './subject.component.html',
  	styleUrls: ['./subject.component.scss']
})
export class StudentSubjectComponent implements OnChanges {

	subjectsDataStatus : number = 2;
	subjects : any = [];
	@Input() public selectedSemister;
	@Output() public subjectSelected = new EventEmitter();

	constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	public router: Router,
	private studentSubjectService : StudentSubjectService) { };


	ngOnChanges(changes: SimpleChanges) {
		for (let propName in changes) { 
			let change = changes[propName];
			this[propName] = change.currentValue;
		}
		if(this.selectedSemister) {
			this.getSubjects();
		}
	};
	 
	resetSubjectsList() {
		this.subjectsDataStatus = 2;
		this.subjects = [];
		this.loader.showLoader();
	};

	getSubjects() {
		this.resetSubjectsList();
		this.studentSubjectService.getSubjectsList(this.selectedSemister)
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
		this.subjectSelected.emit(subject);
	};


}
