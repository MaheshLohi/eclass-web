import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { DownloadService } from '@sharedServices/download/download.service';
import { StudentExaminationService } from '@studentServices/examination/examination.service';

@Component({
  	selector: 'app-student-examination',
  	templateUrl: './examination.component.html',
  	styleUrls: ['./examination.component.scss']
})
export class StudentExaminationComponent {

	selectedSemister : any = {};
	selectedSubject : any = {};
	isSubjectSelected : boolean = false;
	examDataStatus : number = 2;
	examsList : any = [];

    constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	public router: Router,
	private downloadService : DownloadService,
	private studentExaminationService : StudentExaminationService) { };

	onSemisterSelection(semister) {
		this.selectedSemister = semister;
	};

	onSubjectSelection(subject) {
		this.isSubjectSelected = true;
		this.selectedSubject = subject;
		this.getExamsList();
	};

	resetExamsList() {
		this.examDataStatus = 2;
		this.examsList = [];
		this.loader.showLoader();
	};

	getExamsList() {
		this.resetExamsList();
		this.studentExaminationService.getExamsList(this.selectedSubject)
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
