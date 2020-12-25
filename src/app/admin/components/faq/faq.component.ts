import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import * as _ from "lodash";
declare var $: any; 

import { LoaderService } from '@sharedServices/loader/loader.service';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { AdminTopicService } from '@adminServices/topic/topic.service';
import { AdminFaqService } from '@adminServices/faq/faq.service';

@Component({
  	selector: 'app-admin-faq',
  	templateUrl: './faq.component.html',
  	styleUrls: ['./faq.component.scss']
})
export class AdminFaqComponent implements OnInit {

	chapterId : number;
	topicsDataStatus : number = 2;
	topics : any = [];
	topicId : number;
	faqsDataStatus : number = 2;
	faqs : any = [];
	queryParams : any = {};
	showAddFeature : boolean = false;
	addDataForm : FormGroup;
	selectedFaq : any = {};
	editDataForm : FormGroup;

	constructor(private _translate: TranslateService,
	private _loader: LoaderService,
	private _route: ActivatedRoute,
	private _router: Router,
	private _toaster: ToasterService,
	private _faq : AdminFaqService,
	private _topic : AdminTopicService) {
		this._route.params.subscribe((params: Params) => {
			this.chapterId = params['chapterId'];
		});
		this._route.queryParams
		.subscribe((queryParams: Params) => {
			this.queryParams = queryParams;
		});
		this.addDataForm = new FormGroup({
			'question' : new FormControl('', []),
			'answer' : new FormControl('', [])
		});
		this.editDataForm = new FormGroup({
			'question' : new FormControl('', []),
			'answer' : new FormControl('', [])
		});
	};

	ngOnInit() {
		this.getTopicsList();
	};

	validateAddDataFormValue(formName) {
		return this.addDataForm.get(formName); 
	};

	validateEditDataFormValue(formName) {
		return this.editDataForm.get(formName);
	}

	resetTopicsList() {
		this.topicsDataStatus = 2;
		this.topics = [];
		this._loader.showLoader();
	};

	getTopicsList() {
		this.resetTopicsList();
		this._topic.getTopicsList(this.chapterId)
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.topicsDataStatus = 1;
			this.topics = response.chapter_details.data;
			this.topicId = parseInt(this.queryParams.topicId);
			this.onTopicChange();
		}, (errorCode) => {
			this._loader.hideLoader();
			this.topicsDataStatus = errorCode;
		});
	};

	onTopicChange() {
		this.changeRouteParams();
		this.getFaqsList();
	};

	resetFaqsList() {
		this.faqsDataStatus = 2;
		this.faqs = [];
		this._loader.showLoader();
	};

	getFaqsList() {
		this.resetFaqsList();
		this._faq.getFaqsList(this.topicId)
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.faqsDataStatus = 1;
			this.faqs = response.reverse();
		}, (errorCode) => {
			this._loader.hideLoader();
			this.faqsDataStatus = errorCode;
		});
	};

	changeRouteParams() {
		let data = {};
		data['topicId'] = this.topicId;
		this._router.navigate(['admin/faqs', this.chapterId],{ queryParams: data });
	};

	showAddFeatureView(status) {
		this.showAddFeature = status;
		if(status) {
			this.addDataForm.reset();
		}
	};

	disableAddFeatureForm() {
		return (this.addDataForm.valid) ? false : true;
	};

	disableEditFeatureForm() {
		return (this.editDataForm.valid) ? false : true;
	};

	addFaq() {
		this._loader.showLoader();
		this._faq.addFaq(this.addDataForm.value, this.topicId)
		.subscribe(() => {
			this._loader.hideLoader();
			this.showAddFeatureView(false);
			this.getFaqsList();
			this._toaster.showSuccess(this._translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this._translate.instant("FAQ")} ));
		}, () => {
			this._loader.hideLoader();
		});
	};

	initialiseEditModal(faq) {
		this.selectedFaq = faq;
		this.editDataForm.reset();
		this.editDataForm.get('question').patchValue(this.selectedFaq.question);
		this.editDataForm.get('answer').patchValue(this.selectedFaq.answer);
	};

	updateFaq() {
		this._loader.showLoader();
		this._faq.updateFaq(this.editDataForm.value, this.selectedFaq.id)
		.subscribe(() => {
			this._loader.hideLoader();
			this.getFaqsList();
			$('#editData').modal('hide');
			this._toaster.showSuccess(this._translate.instant("FEATURE_UPDATED_SUCCESSFULLY",{ value : this._translate.instant("FAQ")} ));
		}, () => {
			this._loader.hideLoader();
		});
	};

	deleteFaq(faq) {
		this._loader.showLoader();
		this._faq.deleteFaq(faq.id)
		.subscribe(() => {
			this._loader.hideLoader();
			this.getFaqsList();
			this._toaster.showSuccess(this._translate.instant("FEATURE_DELETED_SUCCESSFULLY",{ value : this._translate.instant("FAQ")} ));
		}, () => {
			this._loader.hideLoader();
		});
	};

}
