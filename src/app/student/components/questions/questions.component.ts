import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

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

	constructor(private _translate: TranslateService,
	private _toaster: ToasterService,
	private _loader: LoaderService,
	private _question : StudentQuestionsService) { 
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
		this._loader.showLoader();
	};

	getQuestionsList() {
		this.resetQuestionsList();
		this._question.getQuestionsList(this.topicId)
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.questionsDataStatus = 1;
			this.questions = response.reverse();
		}, () => {
			this._loader.hideLoader();
			this.questionsDataStatus = 0;
		});
	};

	disableAddFeatureForm() {
		return (this.addDataForm.valid) ? false : true;
	};

	addQuestion() {
		this._loader.showLoader();
		this._question.addQuestion(this.addDataForm.value,this.topicId)
		.subscribe(() => {
			this._loader.hideLoader();
			this.getQuestionsList();
			this.addDataForm.reset();
			this._toaster.showSuccess(this._translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this._translate.instant("QUESTION")} ));
		}, () => {
			this._loader.hideLoader();
		});
	};

}
