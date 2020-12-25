import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Constants } from '@app/constants';
import { DownloadService } from '@app/shared/services/download/download.service';
import { MiscellaneousService } from '@sharedServices/miscellaneous/miscellaneous.service';
import { FacultySubjectsService } from '@app/faculty/services/subjects/subjects.service';
import { LoaderService } from '@app/shared/services/loader/loader.service';

@Component({
  	selector: 'app-faculty-subjects',
  	templateUrl: './subjects.component.html',
  	styleUrls: ['./subjects.component.scss']
})
export class FacultySubjectsComponent implements OnInit {

	subjectsListStatus : number = 2;
	subjectsList : any = [];

	constructor(public _constants: Constants,
	public _miscellaneous: MiscellaneousService,
	public _download: DownloadService,
	private _router: Router,
	private _loader: LoaderService,
	private _subjects: FacultySubjectsService) { }

  	ngOnInit() {
		this.getFacultySubjects();
	};

	resetSubjectsList() {
		this.subjectsListStatus = 2;
		this.subjectsList = [];
		this._loader.showLoader();
	};
	  
	getFacultySubjects() {
		this.resetSubjectsList();
		this._subjects.getSubjectsList()
		.subscribe((response : any) => {
			this._loader.hideLoader();
			this.subjectsListStatus = 1;
			this.subjectsList = response;
		},(errorStatus)=> {
			this.subjectsListStatus = errorStatus;
			this._loader.hideLoader();
		})
	};

	onSubjectSelection(subject) {
		this._router.navigate(['faculty/questions', subject.id]);
	};

}
