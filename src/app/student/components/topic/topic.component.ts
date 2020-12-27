import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as _ from "lodash";

import { Constants } from '@app/constants';
import { DownloadService } from '@sharedServices/download/download.service';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { StudentTopicService } from '@studentServices/topic/topic.service';
import { StudentWishlistService } from '@studentServices/wishlist/wishlist.service';

@Component({
  	selector: 'app-student-topic',
  	templateUrl: './topic.component.html',
  	styleUrls: ['./topic.component.scss']
})
export class StudentTopicComponent implements OnInit {

	chapterId : number;
	topicsDataStatus : number = 2;
	topics : any = [];
	selectedTopic : any = {};
	videoUrl : string;
	chapterDetails : any = {};
	queryParams : any = {};

	constructor(public _constants: Constants,
	public _download: DownloadService,
	private _translate: TranslateService,
	private _toaster: ToasterService,
	private _loader: LoaderService,
	private _route: ActivatedRoute,
	private _router: Router,
	private _topic: StudentTopicService,
	private _wishlist: StudentWishlistService) {
		this._route.params.subscribe((params: Params) => {
			this.chapterId = params['chapterId'];
		});
		this._route.queryParams
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
		this._router.navigate(['student/topics', this.chapterId],{ queryParams: data });
	};

	updateTopicWishlist(status) {
		this._loader.showLoader();
		this._wishlist.updateTopicWishlist(this.selectedTopic)
		.subscribe(() => {
			this._loader.hideLoader();
			this.selectedTopic.is_wishlist = status;
			this._toaster.showSuccess(this._translate.instant("FEATURE_UPDATED_SUCCESSFULLY",{ value : this._translate.instant("WISHLIST")} ));
		}, () => {
			this._loader.hideLoader();
		});
	};
}
