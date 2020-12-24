import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Constants } from '@app/constants';
import { MiscellaneousService } from '@sharedServices/miscellaneous/miscellaneous.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { StudentRecentVideosService } from '@studentServices/recent-videos/recent-videos.service';

@Component({
  	selector: 'app-student-recent-videos',
  	templateUrl: './recent-videos.component.html',
  	styleUrls: ['./recent-videos.component.scss']
})
export class StudentRecentVideosComponent implements OnInit {

	recentVideosDataStatus : number = 2;
	recentVideos : any = [];

	constructor(public constants : Constants,
	public miscellaneous : MiscellaneousService,
	private loader: LoaderService,
	private router: Router,
	private studentRecentVideosService : StudentRecentVideosService) { };

	ngOnInit() {
		this.getRecentVideosList();
	};

	resetRecentVideosList() {
		this.recentVideosDataStatus = 2;
		this.recentVideos = [];
		this.loader.showLoader();
	};

	getRecentVideosList() {
		this.resetRecentVideosList();
		this.studentRecentVideosService.getRecentVideosList()
		.subscribe((response:any) => {
			this.loader.hideLoader();
			this.recentVideosDataStatus = 1;
			this.recentVideos = response;
		}, (errorCode) => {
			this.loader.hideLoader();
			this.recentVideosDataStatus = errorCode;
		});
	};

	navigateToTopics(topic) {
		let data = {};
		data['topicId'] = topic.id;
		this.router.navigate(['student/topics', topic.chapter_id],{ queryParams: data });
	};

}
