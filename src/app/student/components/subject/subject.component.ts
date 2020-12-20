import { Component } from '@angular/core';
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
export class StudentSubjectComponent {

	subjectsDataStatus : number = 2;
	subjects : any = [];
	selectedSemester : any = {};

	constructor(public constants : Constants,
	public downloadService : DownloadService,
	public miscellaneousService : MiscellaneousService,
	private loader: LoaderService,
	private router: Router,
	private studentSubjectService : StudentSubjectService) { };

	onSemesterSelection(semester) {
		this.selectedSemester = semester;
		this.getSubjects();
	};
	 
	resetSubjectsList() {
		this.subjectsDataStatus = 2;
		this.subjects = [];
		this.loader.showLoader();
	};

	getSubjects() {
		this.resetSubjectsList();
		this.studentSubjectService.getSubjectsList(this.selectedSemester)
		.subscribe((response:any) => {
			this.loader.hideLoader();
			this.subjectsDataStatus = 1;
			this.subjects = response[0].subjects.data;
		}, (errorCode) => {
			this.loader.hideLoader();
			this.subjectsDataStatus = errorCode;
		});
	};

	onSubjectSelection(subject) {
		let data = {};
		data['contentType'] = (this.router.url === "/student/home") ? 1 : 2;
		this.router.navigate(['student/contents', subject.id],{ queryParams: data });
	};

}
