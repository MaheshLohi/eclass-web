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

	constructor(public _constants : Constants,
	public _miscellaneous : MiscellaneousService,
	private _route: ActivatedRoute,
	private _router: Router,
	private _loader: LoaderService,
	private _search : StudentSearchService) { 
		this._route.queryParams
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
	};

	getSearchResults() {
		this.resetSearchResultsList();
		this.changeRouteParams();
		if(this.searchString) {
			this._loader.showLoader();
			this._search.getSearchResultsList(this.searchString)
			.subscribe((response:any) => {
				this._loader.hideLoader();
				this.searchResultsDataStatus = 1;
				this.searchResults = response;
			}, (errorCode) => {
				this._loader.hideLoader();
				this.searchResultsDataStatus = errorCode;
			});
		}
	};

	changeRouteParams() {
		if(this.searchString) {
			let data = {};
			data['searchString'] = this.searchString;
			this._router.navigate(['student/search'],{ queryParams: data });
		}
		else {
			this._router.navigate(['student/search']);
		}
	};

	navigateToTopics(topic) {
		let data = {};
		data['topicId'] = topic.id;
		this._router.navigate(['student/topics', topic.chapter_id],{ queryParams: data });
	};

	preventEvent(event) {
		event.stopPropagation();
	};

}
