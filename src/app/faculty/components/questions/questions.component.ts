import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { DownloadService } from '@sharedServices/download/download.service';
import { MiscellaneousService } from '@sharedServices/miscellaneous/miscellaneous.service';
import { FacultyQuestionsService } from '@app/faculty/services/questions/questions.service';

@Component({
  	selector: 'app-faculty-questions',
  	templateUrl: './questions.component.html',
  	styleUrls: ['./questions.component.scss']
})
export class FacultyQuestionsComponent implements OnInit {

	subjectId : number;
	questionsList : any = [];
	questionsListStatus : number = 2;

  	constructor(public constants : Constants,
	private loader: LoaderService,
	private route: ActivatedRoute,
	public router: Router,
	private toaster: ToasterService,
	private translate: TranslateService,
	public downloadService : DownloadService,
	public miscellaneousService : MiscellaneousService,
	private facultyQuestionsService : FacultyQuestionsService) { 
		this.route.params.subscribe((params: Params) => {
			this.subjectId = params['subjectId'];
		});
	}

	ngOnInit() {
		this.getQuestionsList();
	}

	resetQuestionsList() {
		this.questionsListStatus = 2;
		this.questionsList = {};
		this.loader.showLoader();
	};

	getQuestionsList() {
		this.resetQuestionsList();
		this.facultyQuestionsService.getQuestionsList(this.subjectId)
		.subscribe((response : any) => {
			console.log(JSON.stringify(response.data))
			if(response && response.data && response.data.length) {
				this.questionsListStatus = 1;
				this.questionsList = response.data;
			}
			else {
				this.questionsListStatus = 0;
			}
			this.loader.hideLoader();
		},()=> {
			this.questionsListStatus = 0;
			this.loader.hideLoader();
		})
	};

	submitReplay(question) {
		this.loader.showLoader();
		this.facultyQuestionsService.submitReplay(question)
		.subscribe(() => {
			this.getQuestionsList();
			this.loader.hideLoader();
			this.toaster.showSuccess(this.translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this.translate.instant("REPLAY")} ));
		}, () => {
			this.loader.hideLoader();
		});
	}

}
