import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Constants } from '@app/constants';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { DownloadService } from '@sharedServices/download/download.service';
import { StudentSubjectService } from '@studentServices/subject/subject.service';

@Component({
  	selector: 'app-student-content',
  	templateUrl: './content.component.html',
  	styleUrls: ['./content.component.scss']
})
export class StudentContentComponent implements OnInit {

	subjectId : any = '';
	subjectDetailsDataStatus : number = 2;
	subjectDetails : any = {};
	contentType : number;

  	constructor(public constants : Constants,
	private loader: LoaderService,
	private route: ActivatedRoute,
	public router: Router,
	private downloadService : DownloadService,
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
		.then((response:any) => {
			this.loader.hideLoader();
			this.subjectDetailsDataStatus = 1;
			this.subjectDetails = response;
		}, () => {
			this.loader.hideLoader();
			this.subjectDetailsDataStatus = 0;
		});
	};

	downloadSyllabus(subjectDetails) {
		this.downloadService.download(subjectDetails.syllabus);
	};

	updateNavigation(contentType) {
		this.contentType = contentType;
		let data = {};
		data['contentType'] = contentType;
		this.router.navigate(['student/contents', this.subjectId],{ queryParams: data });
	};
}
