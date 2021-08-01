import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

import { DownloadService } from '@sharedServices/download/download.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { StudentExaminationService } from '@studentServices/examination/examination.service';

@Component({
  	selector: 'app-student-examination',
  	templateUrl: './examination.component.html',
  	styleUrls: ['./examination.component.scss']
})
export class StudentExaminationComponent implements OnChanges {

	@Input() subjectId: number;
	examDataStatus : number = 2;
	examsList : any = [];

	constructor(public _download: DownloadService,
	private _loader: LoaderService,
	private _examination: StudentExaminationService) { };

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
		this._loader.showLoader();
	};

	getExamsList() {
		this.resetExamsList();
		this._examination.getExamsList(this.subjectId)
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.examDataStatus = 1;
			this.examsList = response;
		}, (errorCode) => {
			this._loader.hideLoader();
			this.examDataStatus = errorCode;
		});
	};
}
