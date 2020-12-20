import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as _ from "lodash";

import { Constants } from '@app/constants';
import { MiscellaneousService } from '@app/shared/services/miscellaneous/miscellaneous.service';

@Injectable({
  	providedIn: 'root'
})
export class AdminChapterService {

	constructor(private constants: Constants,
	private http: HttpClient,
	private miscellaneous : MiscellaneousService) { }

	getChapters(data) : Observable<any> {
		const httpOptions = this.miscellaneous.getHttpOptionsWithContentType();
		return this.http.get<any>(this.constants.CHAPTERS_LIST_URL +  data.subject_id + '/chapters', httpOptions)
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
	  
	addChapter(filterData, addFormValue, selectedFile, thumbnailFile) : Observable<any> {
		const formData = new FormData();
		formData.append('notes', selectedFile);
		formData.append('thumbnail', thumbnailFile);
		formData.append('name', addFormValue.name);
		formData.append('subject_id', filterData.subject_id);
		formData.append('description', addFormValue.description);
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.post<any>(this.constants.ADD_CHAPTERS_URL, formData, httpOptions)
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

	addTopic(topicFormData, videoFile1, videoFile2) {
		const formData = new FormData();
		formData.append('video1', videoFile1);
		formData.append('video2', videoFile2);
		formData.append('topic', topicFormData.name);
		formData.append('keywords', topicFormData.keywords);
		formData.append('related_videos', topicFormData.related_videos);
		formData.append('chapter_id', topicFormData.chapter_id);
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.post<any>(this.constants.ADD_TOPIC_URL, formData, httpOptions)
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

	updateChapter(updateFormValue, notesFile?:any, thumbnailFile?:any) {
		const formData = new FormData();
		if(notesFile) { formData.append('notes', notesFile); }
		if(thumbnailFile) { formData.append('thumbnail', thumbnailFile); }
		formData.append('name', updateFormValue.name);
		formData.append('description', updateFormValue.description);
		formData.append('chapter_id', updateFormValue.chapter_id);
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.post<any>(this.constants.UPDATE_CHAPTERS_URL, formData, httpOptions)
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
}
