import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';
import { HttpErrorHandlerService } from '@sharedServices/httpErrorHandler/httpErrorHandler.service';

@Injectable({
  	providedIn: 'root'
})
export class AdminTopicService {

	constructor(private httpService: HttpClientService,
	public loggerService: LoggerService,
	private constants: Constants,
	private httpErrorHandler : HttpErrorHandlerService) { }

	getTopicsList(chapterId) {
		return new Promise((resolve, reject) => {
			this.httpService.getWithCustomHeader(this.constants.ADMIN_TOPICS_LIST_URL +  chapterId)
			.subscribe((response) => {
				if(response && response.data && response.data.length) {
					let result = response.data[0];
					if(result.chapter_details && result.chapter_details.data && result.chapter_details.data.length) {
						resolve(result);
					}
					else {
						reject();
					}
				}
				else {
					reject();
				}
			}, (error) => {
				this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
				reject(error);
			});
		});
	}

	updateTopic(topicFormData, videoFile1?:any, videoFile2?:any) {
		const formData = new FormData();
		if(videoFile1) { formData.append('video1', videoFile1); }
		if(videoFile2) { formData.append('video2', videoFile2); }
		formData.append('topic', topicFormData.name);
		formData.append('keywords', topicFormData.keywords);
		formData.append('related_videos', topicFormData.related_videos);
		formData.append('chapter_details_id', topicFormData.chapter_details_id);
		return new Promise((resolve, reject) => {
			this.httpService.postWithFormData(this.constants.UPDATE_TOPIC_URL, formData)
			.subscribe((response) => {
				resolve(response);
			}, (error) => {
				this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
				reject(error);
			});
		});
	}
}
