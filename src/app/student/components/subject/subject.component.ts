import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Constants } from '@app/constants';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { DownloadService } from '@sharedServices/download/download.service';
import { MiscellaneousService } from '@sharedServices/miscellaneous/miscellaneous.service';
import { StudentSubjectService } from '@studentServices/subject/subject.service';

@Component({
  	selector: 'app-student-subject',
  	templateUrl: './subject.component.html',
  	styleUrls: ['./subject.component.scss']
})
export class StudentSubjectComponent {

	subjectsDataStatus : number = 2;
	subjects : any = [];
	selectedSemister : any = {};

	constructor(public constants : Constants,
	private loader: LoaderService,
	public router: Router,
	public downloadService : DownloadService,
	public miscellaneousService : MiscellaneousService,
	private studentSubjectService : StudentSubjectService) { };

	onSemisterSelection(semister) {
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

	onSubjectSelection(subject) {
		let data = {};
		data['contentType'] = (this.router.url === "/student/home") ? 1 : 2;
		this.router.navigate(['student/contents', subject.id],{ queryParams: data });
	};

}
