import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as _ from "lodash";
declare var $: any;

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { AdminTopicService } from '@adminServices/topic/topic.service';

@Component({
  	selector: 'app-admin-topic',
  	templateUrl: './topic.component.html',
  	styleUrls: ['./topic.component.scss']
})
export class AdminTopicComponent implements OnInit {

	chapterId : number;
	topicsDataStatus : number = 2;
	topics : any = [];
	selectedTopic : any = {};
	videoUrl : string;
	chapterDetails : any = {};
	queryParams : any = {};
	editTopicForm : FormGroup;

	constructor(public _constants : Constants,
	private _translate: TranslateService,
	private _toaster: ToasterService,
	private _loader: LoaderService,
	private _route: ActivatedRoute,
	private _router: Router,
	private _topic : AdminTopicService) {
		this._route.params.subscribe((params: Params) => {
			this.chapterId = params['chapterId'];
		});
		this._route.queryParams
		.subscribe((queryParams: Params) => {
			this.queryParams = queryParams;
		})
		this.editTopicForm = new FormGroup({
			'name' : new FormControl("", [Validators.minLength(3)]),
			'chapter_details_id' : new FormControl("", []),
			'video1' : new FormControl("", [Validators.required]),
			'video2' : new FormControl("", [Validators.required]),
			'keywords' : new FormControl("", []),
			'related_videos' : new FormControl("", [])
		});
	};

	ngOnInit() {
		this.getTopicsList();
	};

	validateUpdateTopicFormValue(formName) {
		return this.editTopicForm.get(formName); 
	};

	resetTopicsList() {
		this.topicsDataStatus = 2;
		this.topics = [];
		this.chapterDetails = {};
		this._loader.showLoader();
	};

	getTopicsList() {
		this.resetTopicsList();
		this._topic.getTopicsList(this.chapterId)
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.topicsDataStatus = 1;
			this.chapterDetails = response;
			this.topics = response.chapter_details.data;
			if(this.queryParams.topicId) {
				let index = _.findIndex(this.topics, { id: parseInt(this.queryParams.topicId)});
				this.selectTopic((index > -1)? this.topics[index] : this.topics[0]);
			}
			else {
				this.selectTopic(this.topics[0]);
			}
		}, (errorCode) => {
			this._loader.hideLoader();
			this.topicsDataStatus = errorCode;
		});
	};

	selectTopic(topic) {
		this.selectedTopic = topic; 
		let videoBasePath = JSON.parse(topic.video);
		this.videoUrl = this._constants.DOMAIN_URL + videoBasePath.video_path['480'];
		this.changeRouteParams();
	};

	changeRouteParams() {
		let data = {};
		data['topicId'] = this.selectedTopic.id;
		this._router.navigate(['admin/topics', this.chapterId],{ queryParams: data });
	};

	navigateToFaqs(topic) {
		let data = {};
		data['topicId'] = topic.id;
		this._router.navigate(['admin/faqs', this.chapterId],{ queryParams: data });
	};

	editTopic(topic) {
		$('#editTopicForm')[0].reset();
		this.editTopicForm.reset();
		this.editTopicForm.patchValue({
			name: topic.name, chapter_details_id: topic.id, keywords: topic.keywords, related_videos: topic.related_videos
		})
	};

	onFileChange(event, fileTarget) {
		this["editTopicForm"].get(fileTarget).setValue(null);
		if (event.target.files.length > 0) {
			this["editTopicForm"].get(fileTarget).setValue(event.target.files[0]);
		}
	};

	updateTopic() {
		this._loader.showLoader();
		this._topic.updateTopic(this.editTopicForm.value)
		.subscribe(() => {
			this._loader.hideLoader();
			$('#update-topic').modal('hide');
			this.getTopicsList();
			this._toaster.showSuccess(this._translate.instant("FEATURE_UPDATED_SUCCESSFULLY",{ value : this._translate.instant("TOPIC")} ));
		}, () => {
			this._loader.hideLoader();
		});
	};
}
