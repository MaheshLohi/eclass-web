import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '@app/constants';

@Injectable({
  	providedIn: 'root'
})
export class AdminFaqService {

	constructor(private constants: Constants,
	private http: HttpClient) { }

	getFaqsList(topicId) : Observable<any> {
		return this.http.get<any>(this.constants.ADMIN_FAQS_LIST_URL + topicId)
		.pipe(
			map(response => { 
				if (response && response.data && response.data.length) {
				  	return response.data; 
				} 
				throw 0;
			})
		)
	};

	addFaq(addFormValue, topicId) : Observable<any> {
		const formData = new FormData();
		formData.append('question', addFormValue.question);
		formData.append('answer', addFormValue.answer);
		formData.append('chapter_detail_id',topicId);
		return this.http.post<any>(this.constants.ADD_FAQ_URL, formData);
	};

	updateFaq(editFormValue, faqId) : Observable<any> {
		const formData = new FormData();
		formData.append('question', editFormValue.question);
		formData.append('answer', editFormValue.answer);
		formData.append('id',faqId);
		return this.http.post<any>(this.constants.UPDATE_FAQ_URL, formData);
	};

	deleteFaq(faqId) : Observable<any> {
		return this.http.delete<any>(this.constants.DELETE_FAQ_URL + faqId);
	}
}
