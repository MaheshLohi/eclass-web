import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { StudentTopicService } from '@studentServices/topic/topic.service';

@Component({
  	selector: 'app-student-topic',
  	templateUrl: './topic.component.html',
  	styleUrls: ['./topic.component.scss']
})
export class StudentTopicComponent implements OnInit {

	chapterId : any = '';
	topicsDataStatus : number = 2;
	topics : any = [];
	selectedTopic : any = {};
	videoUrl : any = null;

	constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	private route: ActivatedRoute,
	public router: Router,
	private studentTopicService : StudentTopicService) {
		this.route.params.subscribe((params: Params) => {
			this.chapterId = params['chapterId'];
		});
	}

	ngOnInit() {
		this.getTopicsList();
	};

	resetTopicsList() {
		this.topicsDataStatus = 2;
		this.topics = [];
		this.loader.showLoader();
	};

	getTopicsList() {
		this.resetTopicsList();
		this.studentTopicService.getTopicsList(this.chapterId)
		.then((response:any) => {
			this.loader.hideLoader();
			this.topicsDataStatus = 1;
			this.topics = response[0].chapter_details.data;
			this.selectTopic(this.topics[0]);
		}, () => {
			this.loader.hideLoader();
			this.topicsDataStatus = 0;
		});
	};

	selectTopic(topic) {
		this.selectedTopic = topic; 
		let videoBasePath = JSON.parse(topic.video);
		this.videoUrl = this.constants.DOMAIN_URL + videoBasePath.video_path['480'];
	}
}
