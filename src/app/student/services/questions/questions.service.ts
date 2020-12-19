import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';

@Injectable({
  	providedIn: 'root'
})
export class StudentQuestionsService {

	constructor(private httpService: HttpClientService,
	public loggerService: LoggerService,
	private constants: Constants) { }

	getQuestionsList(topicId) {
		return new Promise((resolve, reject) => {
			this.httpService.get(this.constants.STUDENT_QUESTIONS_LIST_URL + topicId)
			.subscribe((response) => {
				if(response && response.data && response.data.length) {
					resolve(response.data);
				}
				else {
					reject();
				}
			}, (error) => {
				reject(error);
			});
		});
	};

	addQuestion(addForm,topicId) {
		const formData = new FormData();
		formData.append('chapter_detail_id', topicId);
		formData.append('question', addForm.question);
		return new Promise((resolve, reject) => {
			this.httpService.postWithFormData(this.constants.STUDENT_ADD_QUESTION_URL, formData)
			.subscribe((response) => {
				resolve(response);
			}, (error) => {
				reject(error);
			});
		});
	};
}
