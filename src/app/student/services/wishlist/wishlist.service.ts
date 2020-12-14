import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';
import { HttpErrorHandlerService } from '@sharedServices/httpErrorHandler/httpErrorHandler.service';

@Injectable({
  	providedIn: 'root'
})
export class StudentWishlistService {

	constructor(private httpService: HttpClientService,
	public loggerService: LoggerService,
	private constants: Constants,
	private httpErrorHandler : HttpErrorHandlerService) { }

	getWishlistDetails() {
		return new Promise((resolve, reject) => {
		  	this.httpService.get(this.constants.STUDENT_WISHLIST_LIST_URL)
		  	.subscribe((response) => {
			  	if(response && response.data && response.data.length) {
				  	resolve(response.data);
			  	}
			  	else {
				  	reject();
			  	}
		  	}, (error) => {
			  	this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
			  	reject(error);
		  	});
		});
	};

	updateTopicWishlist(selectedTopic) {
		const formData = new FormData();
		formData.append('chapter_detail_id', selectedTopic.id);
		let url = (selectedTopic.is_wishlist === 1) ? this.constants.STUDENT_TOGGLE_WISHLIST_URL : this.constants.STUDENT_ADD_WISHLIST_URL;
		return new Promise((resolve, reject) => {
			this.httpService.postWithFormData(url, formData)
			.subscribe((response) => {
				resolve(response);
			}, (error) => {
				this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
				reject(error);
			});
		});
	};
}
