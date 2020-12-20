import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { StudentQuestionsService } from '@studentServices/questions/questions.service';

@Component({
  	selector: 'app-student-questions',
  	templateUrl: './questions.component.html',
  	styleUrls: ['./questions.component.scss']
})
export class StudentQuestionsComponent implements OnChanges {

	@Input() topicId: any;
	questionsDataStatus : number = 2;
	questions : any = [];
	addDataForm : FormGroup;

	constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	public router: Router,
	private studentQuestionsService : StudentQuestionsService) { 
		this.addDataForm = new FormGroup({
			'question' : new FormControl("", [])
		});
	};
	
	validateAddFormValue(formName) {
		return this.addDataForm.get(formName); 
	};

  	ngOnChanges(changes: SimpleChanges) {
		for (let propName in changes) { 
			let change = changes[propName];
			this[propName] = change.currentValue;
		}
		this.getQuestionsList();
	};

	resetQuestionsList() {
		this.questionsDataStatus = 2;
		this.questions = [];
		this.loader.showLoader();
	};

	getQuestionsList() {
		this.resetQuestionsList();
		this.studentQuestionsService.getQuestionsList(this.topicId)
		.subscribe((response:any) => {
			this.loader.hideLoader();
			this.questionsDataStatus = 1;
			this.questions = response.reverse();
		}, () => {
			this.loader.hideLoader();
			this.questionsDataStatus = 0;
		});
	};

	disableAddFeatureForm() {
		return (this.addDataForm.valid) ? false : true;
	};

	addQuestion() {
		this.loader.showLoader();
		this.studentQuestionsService.addQuestion(this.addDataForm.value,this.topicId)
		.subscribe(() => {
			this.loader.hideLoader();
			this.getQuestionsList();
			this.addDataForm.reset();
			this.toaster.showSuccess(this.translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this.translate.instant("QUESTION")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};

}
