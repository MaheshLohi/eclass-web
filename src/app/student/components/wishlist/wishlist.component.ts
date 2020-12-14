import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { MiscellaneousService } from '@app/shared/services/miscellaneous/miscellaneous.service';
import { StudentWishlistService } from '@studentServices/wishlist/wishlist.service';

@Component({
  	selector: 'app-student-wishlist',
  	templateUrl: './wishlist.component.html',
  	styleUrls: ['./wishlist.component.scss']
})
export class StudentWishlistComponent implements OnInit {

	wishlistDataStatus : number = 2;
	wishlists : any = [];

	constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	public router: Router,
	public miscellaneousService : MiscellaneousService,
	private studentWishlistService : StudentWishlistService) {	}

	ngOnInit() {
		this.getWishlistDetails();
	};

	resetWishlistDetails() {
		this.wishlistDataStatus = 2;
		this.wishlists = [];
		this.loader.showLoader();
	};

	getWishlistDetails() {
		this.resetWishlistDetails();
		this.studentWishlistService.getWishlistDetails()
		.then((response:any) => {
			this.loader.hideLoader();
			this.wishlistDataStatus = 1;
			this.wishlists = response;
		}, () => {
			this.loader.hideLoader();
			this.wishlistDataStatus = 0;
		});
	};

	navigateToTopics(topic) {
		let data = {};
		data['topicId'] = topic.id;
		this.router.navigate(['student/topics', topic.chapter_id],{ queryParams: data });
	};

	preventEvent(event) {
		event.stopPropagation();
	};

	updateTopicWishlist(selectedTopic, event) {
		this.preventEvent(event)
		this.loader.showLoader();
		let data = {};
		data['id'] =  selectedTopic.chapter_detail_id;
		data['is_wishlist'] = 1;
		this.studentWishlistService.updateTopicWishlist(data)
		.then(() => {
			this.loader.hideLoader();
			this.getWishlistDetails();
			this.toaster.showSuccess(this.translate.instant("FEATURE_UPDATED_SUCCESSFULLY",{ value : this.translate.instant("WISHLIST")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};

}
