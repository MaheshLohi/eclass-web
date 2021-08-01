import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { Constants } from '@app/constants';
import { MiscellaneousService } from '@app/shared/services/miscellaneous/miscellaneous.service';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { StudentWishlistService } from '@studentServices/wishlist/wishlist.service';

@Component({
  	selector: 'app-student-wishlist',
  	templateUrl: './wishlist.component.html',
  	styleUrls: ['./wishlist.component.scss']
})
export class StudentWishlistComponent implements OnInit {

	wishlistDataStatus : number = 2;
	wishlists : any = [];

	constructor(public _constants : Constants,
	public _miscellaneous : MiscellaneousService,
	private _translate: TranslateService,
	private _toaster: ToasterService,
	private _loader: LoaderService,
	private _router: Router,
	private _wishlist : StudentWishlistService) { };

	ngOnInit() {
		this.getWishlistDetails();
	};

	resetWishlistDetails() {
		this.wishlistDataStatus = 2;
		this.wishlists = [];
		this._loader.showLoader();
	};

	getWishlistDetails() {
		this.resetWishlistDetails();
		this._wishlist.getWishlistDetails()
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.wishlistDataStatus = 1;
			this.wishlists = response;
		}, (errorCode) => {
			this._loader.hideLoader();
			this.wishlistDataStatus = errorCode;
		});
	};

	navigateToTopics(topic) {
		let data = {};
		data['topicId'] = topic.id;
		this._router.navigate(['student/topics', topic.chapter_id],{ queryParams: data });
	};

	preventEvent(event) {
		event.stopPropagation();
	};

	updateTopicWishlist(selectedTopic, event) {
		this.preventEvent(event)
		this._loader.showLoader();
		let data = {};
		data['id'] =  selectedTopic.chapter_detail_id;
		data['is_wishlist'] = 1;
		this._wishlist.updateTopicWishlist(data)
		.subscribe(() => {
			this._loader.hideLoader();
			this.getWishlistDetails();
			this._toaster.showSuccess(this._translate.instant("FEATURE_UPDATED_SUCCESSFULLY",{ value : this._translate.instant("WISHLIST")} ));
		}, () => {
			this._loader.hideLoader();
		});
	};

}
