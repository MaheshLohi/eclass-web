import { Injectable } from '@angular/core';
import * as _ from "lodash";

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';
import { HttpErrorHandlerService } from '@sharedServices/httpErrorHandler/httpErrorHandler.service';

@Injectable({
  	providedIn: 'root'
})
export class AdminChapterService {

	constructor(private httpService: HttpClientService,
	public loggerService: LoggerService,
	private constants: Constants,
	private httpErrorHandler : HttpErrorHandlerService) { }

	getChapters(data) {
		return new Promise((resolve, reject) => {
		  	this.httpService.get(this.constants.CHAPTERS_LIST_URL +  data.subject_id + '/chapters')
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
	  
	addChapter(filterData, addFormValue, selectedFile, thumbnailFile) {
		const formData = new FormData();
		formData.append('notes', selectedFile);
		formData.append('thumbnail', thumbnailFile);
		formData.append('name', addFormValue.name);
		formData.append('subject_id', filterData.subject_id);
		formData.append('description', addFormValue.description);
		return new Promise((resolve, reject) => {
			this.httpService.postWithFormData(this.constants.ADD_CHAPTERS_URL, formData)
			.subscribe((response) => {
				resolve(response);
			}, (error) => {
				this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
				reject(error);
			});
		});
	};

	addTopic(topicFormData, videoFiles) {
		const formData = new FormData();
		_.forEach(videoFiles, (video,index) => {
			var i = index + 1;
			formData.append('video'+i, video);
		})
		formData.append('topic', topicFormData.name);
		formData.append('keywords', topicFormData.keywords);
		formData.append('related_videos', topicFormData.related_videos);
		formData.append('chapter_id', topicFormData.chapter_id);
		return new Promise((resolve, reject) => {
			this.httpService.postWithFormData(this.constants.ADD_TOPIC_URL, formData)
			.subscribe((response) => {
				resolve(response);
			}, (error) => {
				this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
				reject(error);
			});
		});
	}
}
