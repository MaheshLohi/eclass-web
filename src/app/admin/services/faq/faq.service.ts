import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';
import { HttpErrorHandlerService } from '@sharedServices/httpErrorHandler/httpErrorHandler.service';

@Injectable({
  	providedIn: 'root'
})
export class AdminFaqService {

	constructor(private httpService: HttpClientService,
	public loggerService: LoggerService,
	private constants: Constants,
	private httpErrorHandler : HttpErrorHandlerService) { }

	getFaqsList(topicId) {
		return new Promise((resolve, reject) => {
			this.httpService.get(this.constants.ADMIN_FAQS_LIST_URL + topicId)
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

	addFaq(addFormValue, topicId) {
		const formData = new FormData();
		formData.append('question', addFormValue.question);
		formData.append('answer', addFormValue.answer);
		formData.append('chapter_detail_id',topicId);
		return new Promise((resolve, reject) => {
			this.httpService.postWithFormData(this.constants.ADD_FAQ_URL, formData)
			.subscribe((response) => {
				resolve(response);
			}, (error) => {
				this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
				reject(error);
			});
		});
	};

	updateFaq(editFormValue, faqId) {
		const formData = new FormData();
		formData.append('question', editFormValue.question);
		formData.append('answer', editFormValue.answer);
		formData.append('id',faqId);
		return new Promise((resolve, reject) => {
			this.httpService.postWithFormData(this.constants.UPDATE_FAQ_URL, formData)
			.subscribe((response) => {
				resolve(response);
			}, (error) => {
				this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
				reject(error);
			});
		});
	};

	deleteFaq(faqId) {
		return new Promise((resolve, reject) => {
			this.httpService.delete(this.constants.DELETE_FAQ_URL + faqId)
			.subscribe((response) => {
				resolve(response);
			}, (error) => {
				this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
				reject(error);
			});
		});
	}
}
