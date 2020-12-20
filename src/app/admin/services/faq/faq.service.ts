import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Constants } from '@app/constants';
import { MiscellaneousService } from '@app/shared/services/miscellaneous/miscellaneous.service';

@Injectable({
  	providedIn: 'root'
})
export class AdminFaqService {

	constructor(private constants: Constants,
	private http: HttpClient,
	private miscellaneous : MiscellaneousService) { }

	getFaqsList(topicId) : Observable<any> {
		const httpOptions = this.miscellaneous.getHttpOptionsWithContentType();
		return this.http.get<any>(this.constants.ADMIN_FAQS_LIST_URL + topicId, httpOptions)
		.pipe(
			map(response => { 
				if (response && response.data && response.data.length) {
				  	return response; 
				} else {
					throw throwError(0);
				}
			}),
			catchError((error : HttpErrorResponse)=> {
				this.miscellaneous.handle(error);
				throw throwError(3);
			})
		)
	};

	addFaq(addFormValue, topicId) : Observable<any> {
		const formData = new FormData();
		formData.append('question', addFormValue.question);
		formData.append('answer', addFormValue.answer);
		formData.append('chapter_detail_id',topicId);
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.post<any>(this.constants.ADD_FAQ_URL, formData, httpOptions)
		.pipe(
			map(response => { 
				return response;
			}),
			catchError((error : HttpErrorResponse)=> {
				this.miscellaneous.handle(error);
				throw throwError(3);
			})
		)
	};

	updateFaq(editFormValue, faqId) : Observable<any> {
		const formData = new FormData();
		formData.append('question', editFormValue.question);
		formData.append('answer', editFormValue.answer);
		formData.append('id',faqId);
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.post<any>(this.constants.UPDATE_FAQ_URL, formData, httpOptions)
		.pipe(
			map(response => { 
				return response;
			}),
			catchError((error : HttpErrorResponse)=> {
				this.miscellaneous.handle(error);
				throw throwError(3);
			})
		)
	};

	deleteFaq(faqId) : Observable<any> {
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.delete<any>(this.constants.DELETE_FAQ_URL + faqId, httpOptions)
		.pipe(
			map(response => { 
				return response;
			}),
			catchError((error : HttpErrorResponse)=> {
				this.miscellaneous.handle(error);
				throw throwError(3);
			})
		)
	}
}
