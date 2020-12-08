import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Constants } from '@app/constants';
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

	constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	private route: ActivatedRoute,
	public router: Router,
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
	}

	navigateToTopics(topic) {
		let data = {};
		data['topicId'] = topic.id;
		this.router.navigate(['student/topics', topic.chapter_id],{ queryParams: data });
	}

	changeImageSource(event) {
		event.target.src = "assets/images/default_thumb.jpg";
	};

}
