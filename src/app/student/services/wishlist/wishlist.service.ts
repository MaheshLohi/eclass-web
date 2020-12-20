import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '@app/constants';

@Injectable({
  	providedIn: 'root'
})
export class StudentWishlistService {

	constructor(private constants: Constants,
	private http: HttpClient) { }

	getWishlistDetails():  Observable<any> {
		return this.http.get<any>(this.constants.STUDENT_WISHLIST_LIST_URL)
		.pipe(
			map(response => { 
				if (response && response.data && response.data.length) {
				  	return response; 
				} else {
					throw throwError(0);
				}
			})
		)
	};

	updateTopicWishlist(selectedTopic):  Observable<any> {
		const formData = new FormData();
		formData.append('chapter_detail_id', selectedTopic.id);
		let url = (selectedTopic.is_wishlist === 1) ? this.constants.STUDENT_TOGGLE_WISHLIST_URL : this.constants.STUDENT_ADD_WISHLIST_URL;
		return this.http.post<any>(url, formData);
	};
}
