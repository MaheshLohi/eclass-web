import { Injectable } from '@angular/core';
import * as _ from "lodash";

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';

@Injectable({
  	providedIn: 'root'
})
export class AdminChapterService {

	constructor(private httpService: HttpClientService,
	public loggerService: LoggerService,
	private constants: Constants) { }

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
				reject(error);
			});
		});
	};

	addTopic(topicFormData, videoFile1, videoFile2) {
		const formData = new FormData();
		formData.append('video1', videoFile1);
		formData.append('video2', videoFile2);
		formData.append('topic', topicFormData.name);
		formData.append('keywords', topicFormData.keywords);
		formData.append('related_videos', topicFormData.related_videos);
		formData.append('chapter_id', topicFormData.chapter_id);
		return new Promise((resolve, reject) => {
			this.httpService.postWithFormData(this.constants.ADD_TOPIC_URL, formData)
			.subscribe((response) => {
				resolve(response);
			}, (error) => {
				reject(error);
			});
		});
	}

	updateChapter(updateFormValue, notesFile?:any, thumbnailFile?:any) {
		const formData = new FormData();
		if(notesFile) { formData.append('notes', notesFile); }
		if(thumbnailFile) { formData.append('thumbnail', thumbnailFile); }
		formData.append('name', updateFormValue.name);
		formData.append('description', updateFormValue.description);
		formData.append('chapter_id', updateFormValue.chapter_id);
		return new Promise((resolve, reject) => {
			this.httpService.postWithFormData(this.constants.UPDATE_CHAPTERS_URL, formData)
			.subscribe((response) => {
				resolve(response);
			}, (error) => {
				reject(error);
			});
		});
	};
}
