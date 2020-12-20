import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { StudentSearchService } from '@app/student/services/search/search.service';

import { Constants } from '@app/constants';
import { MiscellaneousService } from '@sharedServices/miscellaneous/miscellaneous.service';
import { LoaderService } from '@sharedServices/loader/loader.service';

@Component({
  	selector: 'app-search',
  	templateUrl: './search.component.html',
  	styleUrls: ['./search.component.scss']
})
export class StudentSearchComponent implements OnInit {

	searchString : string;
	searchResultsDataStatus : number = 2;
	searchResults : any = [];

	constructor(public constants : Constants,
	public miscellaneousService : MiscellaneousService,
	private route: ActivatedRoute,
	private router: Router,
	private loader: LoaderService,
	private studentSearchService : StudentSearchService) { 
		this.route.queryParams
		.subscribe((queryParams: Params) => {
			this.searchString = queryParams.searchString;
		});
	}
	
	ngOnInit() {
		if(this.searchString) {
			this.getSearchResults();
		}
	}

	resetSearchResultsList() {
		this.searchResultsDataStatus = 2;
		this.searchResults = [];
		this.loader.showLoader();
	};

	getSearchResults() {
		if(this.searchString) {
			this.resetSearchResultsList();
			this.changeRouteParams();
			this.studentSearchService.getSearchResultsList(this.searchString)
			.subscribe((response:any) => {
				this.loader.hideLoader();
				this.searchResultsDataStatus = 1;
				this.searchResults = response;
			}, (errorCode) => {
				this.loader.hideLoader();
				this.searchResultsDataStatus = errorCode;
			});
		}
	};

	changeRouteParams() {
		if(this.searchString) {
			let data = {};
			data['searchString'] = this.searchString;
			this.router.navigate(['student/search'],{ queryParams: data });
		}
		else {
			this.router.navigate(['student/search']);
		}
	};

	navigateToTopics(topic) {
		let data = {};
		data['topicId'] = topic.id;
		this.router.navigate(['student/topics', topic.chapter_id],{ queryParams: data });
	};

	preventEvent(event) {
		event.stopPropagation();
	};

}
