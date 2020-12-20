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
export class StudentExaminationComponent implements OnChanges {

	@Input() subjectId: any;
	examDataStatus : number = 2;
	examsList : any = [];

    constructor(public constants : Constants,
	private loader: LoaderService,
	public router: Router,
	public downloadService : DownloadService,
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
		.subscribe((response:any) => {
			this.loader.hideLoader();
			this.examDataStatus = 1;
			this.examsList = response;
		}, () => {
			this.loader.hideLoader();
			this.examDataStatus = 0;
		});
	};
}
