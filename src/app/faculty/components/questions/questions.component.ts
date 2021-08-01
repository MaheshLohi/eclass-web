import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MiscellaneousService } from '@sharedServices/miscellaneous/miscellaneous.service';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
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

	constructor(public _miscellaneous : MiscellaneousService,
	private _loader: LoaderService,
	private _route: ActivatedRoute,
	private _toaster: ToasterService,
	private _translate: TranslateService,
	private _question : FacultyQuestionsService) { 
		this._route.params.subscribe((params: Params) => {
			this.subjectId = params['subjectId'];
		});
	};

	ngOnInit() {
		this.getQuestionsList();
	};

	resetQuestionsList() {
		this.questionsListStatus = 2;
		this.questionsList = {};
		this._loader.showLoader();
	};

	getQuestionsList() {
		this.resetQuestionsList();
		this._question.getQuestionsList(this.subjectId)
		.subscribe((response : any) => {
			this._loader.hideLoader();
			this.questionsListStatus = 1;
			this.questionsList = response;
		},(errorStatus)=> {
			this.questionsListStatus = errorStatus;
			this._loader.hideLoader();
		})
	};

	submitReplay(question) {
		this._loader.showLoader();
		this._question.submitReplay(question)
		.subscribe(() => {
			this.getQuestionsList();
			this._loader.hideLoader();
			this._toaster.showSuccess(this._translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this._translate.instant("REPLAY")} ));
		}, () => {
			this._loader.hideLoader();
		});
	};

}
