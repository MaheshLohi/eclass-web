import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import * as _ from "lodash";

import { Constants } from '@app/constants';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { DownloadService } from '@sharedServices/download/download.service';
import { AdminTopicService } from '@adminServices/topic/topic.service';

@Component({
  	selector: 'app-admin-topic',
  	templateUrl: './topic.component.html',
  	styleUrls: ['./topic.component.scss']
})
export class AdminTopicComponent implements OnInit {

	chapterId : any = '';
	topicsDataStatus : number = 2;
	topics : any = [];
	selectedTopic : any = {};
	videoUrl : any = null;
	chapterDetails : any = {};
	queryParams : any = {};

	constructor(public constants : Constants,
	private loader: LoaderService,
	private route: ActivatedRoute,
	public router: Router,
	private downloadService : DownloadService,
	private adminTopicService : AdminTopicService) {
		this.route.params.subscribe((params: Params) => {
			this.chapterId = params['chapterId'];
		});
		this.route.queryParams
		.subscribe((queryParams: Params) => {
			this.queryParams = queryParams;
		})
	};

	ngOnInit() {
		this.getTopicsList();
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
		.then((response:any) => {
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

	downloadFile() {
		this.downloadService.download(this.chapterDetails.notes);
	};

}
