import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Constants } from '@app/constants';
import { DownloadService } from '@sharedServices/download/download.service';
import { MiscellaneousService } from '@sharedServices/miscellaneous/miscellaneous.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { StudentSubjectService } from '@studentServices/subject/subject.service';

@Component({
  	selector: 'app-student-content',
  	templateUrl: './content.component.html',
  	styleUrls: ['./content.component.scss']
})
export class StudentContentComponent implements OnInit {

	subjectId : number;
	subjectDetailsDataStatus : number = 2;
	subjectDetails : any = {};
	contentType : number;

	constructor(public constants : Constants,
	public downloadService : DownloadService,
	public miscellaneousService : MiscellaneousService,
	private loader: LoaderService,
	private route: ActivatedRoute,
	private router: Router,
	private studentSubjectService : StudentSubjectService) {
    	this.route.params.subscribe((params: Params) => {
			this.subjectId = params['subjectId'];
		});
		this.route.queryParams
		.subscribe((queryParams: Params) => {
			this.contentType = parseInt(queryParams.contentType);
		})
  	}

  	ngOnInit() {
		this.getSubjectDetails();
	}
	  
	resetSubjectDetailsList() {
		this.subjectDetailsDataStatus = 2;
		this.subjectDetails = {};
		this.loader.showLoader();
	};

	getSubjectDetails() {
		this.resetSubjectDetailsList();
		this.studentSubjectService.getSubjectDetails(this.subjectId)
		.subscribe((response:any) => {
			this.loader.hideLoader();
			this.subjectDetailsDataStatus = 1;
			this.subjectDetails = response;
		}, (errorCode) => {
			this.loader.hideLoader();
			this.subjectDetailsDataStatus = errorCode;
		});
	};

	updateNavigation(contentType) {
		this.contentType = contentType;
		let data = {};
		data['contentType'] = contentType;
		this.router.navigate(['student/contents', this.subjectId],{ queryParams: data });
	};
}
