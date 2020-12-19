import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import * as _ from "lodash";
declare var $: any; 

import { Constants } from '@app/constants';
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

	constructor(public constants : Constants,
	private translate: TranslateService,
	private loader: LoaderService,
	private route: ActivatedRoute,
	public router: Router,
	private toaster: ToasterService,
	private adminFaqService : AdminFaqService,
	private adminTopicService : AdminTopicService) {
		this.route.params.subscribe((params: Params) => {
			this.chapterId = params['chapterId'];
		});
		this.route.queryParams
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
		this.loader.showLoader();
	};

	getTopicsList() {
		this.resetTopicsList();
		this.adminTopicService.getTopicsList(this.chapterId)
		.then((response:any) => {
			this.loader.hideLoader();
			this.topicsDataStatus = 1;
			this.topics = response.chapter_details.data;
			this.topicId = parseInt(this.queryParams.topicId);
			this.onTopicChange();
		}, () => {
			this.loader.hideLoader();
			this.topicsDataStatus = 0;
		});
	};

	onTopicChange() {
		this.changeRouteParams();
		this.getFaqsList();
	};

	resetFaqsList() {
		this.faqsDataStatus = 2;
		this.faqs = [];
		this.loader.showLoader();
	};

	getFaqsList() {
		this.resetFaqsList();
		this.adminFaqService.getFaqsList(this.topicId)
		.then((response:any) => {
			this.loader.hideLoader();
			this.faqsDataStatus = 1;
			this.faqs = response.reverse();
		}, () => {
			this.loader.hideLoader();
			this.faqsDataStatus = 0;
		});
	};

	changeRouteParams() {
		let data = {};
		data['topicId'] = this.topicId;
		this.router.navigate(['admin/faqs', this.chapterId],{ queryParams: data });
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
		this.loader.showLoader();
		this.adminFaqService.addFaq(this.addDataForm.value, this.topicId)
		.then(() => {
			this.loader.hideLoader();
			this.showAddFeatureView(false);
			this.getFaqsList();
			this.toaster.showSuccess(this.translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this.translate.instant("FAQ")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};

	initialiseEditModal(faq) {
		this.selectedFaq = faq;
		this.editDataForm.reset();
		this.editDataForm.get('question').patchValue(this.selectedFaq.question);
		this.editDataForm.get('answer').patchValue(this.selectedFaq.answer);
	};

	updateFaq() {
		this.loader.showLoader();
		this.adminFaqService.updateFaq(this.editDataForm.value, this.selectedFaq.id)
		.then(() => {
			this.loader.hideLoader();
			this.getFaqsList();
			$('#editData').modal('hide');
			this.toaster.showSuccess(this.translate.instant("FEATURE_UPDATED_SUCCESSFULLY",{ value : this.translate.instant("FAQ")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};

	deleteFaq(faq) {
		this.loader.showLoader();
		this.adminFaqService.deleteFaq(faq.id)
		.then(() => {
			this.loader.hideLoader();
			this.getFaqsList();
			this.toaster.showSuccess(this.translate.instant("FEATURE_DELETED_SUCCESSFULLY",{ value : this.translate.instant("FAQ")} ));
		}, () => {
			this.loader.hideLoader();
		});
	}

}
