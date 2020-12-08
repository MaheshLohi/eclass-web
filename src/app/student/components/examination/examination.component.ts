import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Constants } from '@app/constants';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { DownloadService } from '@sharedServices/download/download.service';
import { StudentExaminationService } from '@studentServices/examination/examination.service';

@Component({
  	selector: 'app-student-examination',
  	templateUrl: './examination.component.html',
  	styleUrls: ['./examination.component.scss']
})
export class StudentExaminationComponent {

	@Input() subjectId: any;
	@Input() subjectDetails: any;
	examDataStatus : number = 2;
	examsList : any = [];

    constructor(public constants : Constants,
	private loader: LoaderService,
	public router: Router,
	private downloadService : DownloadService,
	private studentExaminationService : StudentExaminationService) { };

	ngOnChanges(changes: SimpleChanges) {
		for (let propName in changes) { 
			let change = changes[propName];
			this[propName] = change.currentValue;
		}
		this.getExamsList();
	};

	resetExamsList() {
		this.examDataStatus = 2;
		this.examsList = [];
		this.loader.showLoader();
	};

	getExamsList() {
		this.resetExamsList();
		this.studentExaminationService.getExamsList(this.subjectId)
		.then((response:any) => {
			this.loader.hideLoader();
			this.examDataStatus = 1;
			this.examsList = response;
		}, () => {
			this.loader.hideLoader();
			this.examDataStatus = 0;
		});
	};

	downloadFile(paper) {
		this.downloadService.download(paper.paper);
	};
}
