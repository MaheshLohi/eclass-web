import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from "lodash";

import { Constants } from '@app/constants';

@Injectable({
  	providedIn: 'root'
})
export class AdminChapterService {

	constructor(private constants: Constants,
	private http: HttpClient) { }

	getChapters(data) : Observable<any> {
		return this.http.get<any>(this.constants.CHAPTERS_LIST_URL +  data.subject_id + '/chapters')
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
	  
	addChapter(filterData, addFormValue, selectedFile, thumbnailFile) : Observable<any> {
		const formData = new FormData();
		formData.append('notes', selectedFile);
		formData.append('thumbnail', thumbnailFile);
		formData.append('name', addFormValue.name);
		formData.append('subject_id', filterData.subject_id);
		formData.append('description', addFormValue.description);
		return this.http.post<any>(this.constants.ADD_CHAPTERS_URL, formData);
	};

	addTopic(topicFormData, videoFile1, videoFile2) {
		const formData = new FormData();
		formData.append('video1', videoFile1);
		formData.append('video2', videoFile2);
		formData.append('topic', topicFormData.name);
		formData.append('keywords', topicFormData.keywords);
		formData.append('related_videos', topicFormData.related_videos);
		formData.append('chapter_id', topicFormData.chapter_id);
		return this.http.post<any>(this.constants.ADD_TOPIC_URL, formData);
	}

	updateChapter(updateFormValue, notesFile?:any, thumbnailFile?:any) {
		const formData = new FormData();
		if(notesFile) { formData.append('notes', notesFile); }
		if(thumbnailFile) { formData.append('thumbnail', thumbnailFile); }
		formData.append('name', updateFormValue.name);
		formData.append('description', updateFormValue.description);
		formData.append('chapter_id', updateFormValue.chapter_id);
		return this.http.post<any>(this.constants.UPDATE_CHAPTERS_URL, formData);
	};
}
