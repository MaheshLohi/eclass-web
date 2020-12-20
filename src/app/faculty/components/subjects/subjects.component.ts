import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Constants } from '@app/constants';
import { MiscellaneousService } from '@sharedServices/miscellaneous/miscellaneous.service';
import { FacultySubjectsService } from '@app/faculty/services/subjects/subjects.service';
import { DownloadService } from '@app/shared/services/download/download.service';
import { LoaderService } from '@app/shared/services/loader/loader.service';

@Component({
  	selector: 'app-faculty-subjects',
  	templateUrl: './subjects.component.html',
  	styleUrls: ['./subjects.component.scss']
})
export class FacultySubjectsComponent implements OnInit {

	subjectsListStatus : number = 2;
	subjectsList : any = [];

	constructor(public constants : Constants,
	public miscellaneousService : MiscellaneousService,
	public downloadService : DownloadService,
	public router: Router,
	private loader: LoaderService,
	private facultySubjectsService : FacultySubjectsService) { }

  	ngOnInit() {
		this.getFacultySubjects();
	}

	resetSubjectsList() {
		this.subjectsListStatus = 2;
		this.subjectsList = [];
		this.loader.showLoader();
	}
	  
	getFacultySubjects() {
		this.resetSubjectsList();
		this.facultySubjectsService.getSubjectsList()
		.subscribe((response : any) => {
			this.loader.hideLoader();
			this.subjectsListStatus = 1;
			this.subjectsList = response;
		},()=> {
			this.subjectsListStatus = 0;
			this.loader.hideLoader();
		})
	}

	onSubjectSelection(subject) {
		this.router.navigate(['faculty/questions', subject.id]);
	}

}
