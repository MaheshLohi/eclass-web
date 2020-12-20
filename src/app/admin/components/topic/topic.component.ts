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
	videoFile1: File;
	videoFile2: File;

	constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	private route: ActivatedRoute,
	public router: Router,
	private adminTopicService : AdminTopicService) {
		this.route.params.subscribe((params: Params) => {
			this.chapterId = params['chapterId'];
		});
		this.route.queryParams
		.subscribe((queryParams: Params) => {
			this.queryParams = queryParams;
		})
		this.editTopicForm = new FormGroup({
			'name' : new FormControl("", [Validators.required]),
			'chapter_details_id' : new FormControl("", [Validators.required]),
			'video_file1' : new FormControl("", []),
			'video_file2' : new FormControl("", []),
			'keywords' : new FormControl("", [Validators.required]),
			'related_videos' : new FormControl("", [Validators.required])
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
		this.loader.showLoader();
	};

	getTopicsList() {
		this.resetTopicsList();
		this.adminTopicService.getTopicsList(this.chapterId)
		.subscribe((response:any) => {
			this.loader.hideLoader();
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
		}, () => {
			this.loader.hideLoader();
			this.topicsDataStatus = 0;
		});
	};

	selectTopic(topic) {
		this.selectedTopic = topic; 
		let videoBasePath = JSON.parse(topic.video);
		this.videoUrl = this.constants.DOMAIN_URL + videoBasePath.video_path['480'];
		this.changeRouteParams();
	};

	changeRouteParams() {
		let data = {};
		data['topicId'] = this.selectedTopic.id;
		this.router.navigate(['admin/topics', this.chapterId],{ queryParams: data });
	};

	navigateToFaqs(topic) {
		let data = {};
		data['topicId'] = topic.id;
		this.router.navigate(['admin/faqs', this.chapterId],{ queryParams: data });
	};

	editTopic(topic) {
		this.editTopicForm.reset();
		this["editTopicForm"].get('name').patchValue(topic.name);
		this["editTopicForm"].get('chapter_details_id').patchValue(topic.id);
		this["editTopicForm"].get('keywords').patchValue(topic.keywords);
		this["editTopicForm"].get('related_videos').patchValue(topic.related_videos);
	};

	onFileChange(event, fileTarget) {
		this[fileTarget] = null;
		if (event.target.files.length > 0) {
			this[fileTarget] = event.target.files[0];
		}
	};

	updateTopic() {
		this.loader.showLoader();
		this.adminTopicService.updateTopic(this.editTopicForm.value, this.videoFile1, this.videoFile2)
		.subscribe(() => {
			this.loader.hideLoader();
			$('#update-topic').modal('hide');
			this.getTopicsList();
			this.toaster.showSuccess(this.translate.instant("FEATURE_UPDATED_SUCCESSFULLY",{ value : this.translate.instant("TOPIC")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};


}
