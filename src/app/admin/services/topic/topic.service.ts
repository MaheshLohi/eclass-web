import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Constants } from '@app/constants';
import { MiscellaneousService } from '@app/shared/services/miscellaneous/miscellaneous.service';

@Injectable({
  	providedIn: 'root'
})
export class AdminTopicService {

	constructor(private constants: Constants,
	private http: HttpClient,
	private miscellaneous : MiscellaneousService) { }

	getTopicsList(chapterId) : Observable<any> {
		const httpOptions = this.miscellaneous.getHttpOptionsWithContentType();
		return this.http.get<any>(this.constants.ADMIN_TOPICS_LIST_URL + chapterId, httpOptions)
		.pipe(
			map(response => { 
				if (response && response.data && response.data.length) {
					let result = response.data[0];
					if(result.chapter_details && result.chapter_details.data && result.chapter_details.data.length) {
						return result;
					}
					else {
						throw throwError(0);
					}
				} else {
					throw throwError(0);
				}
			}),
			catchError((error : HttpErrorResponse)=> {
				this.miscellaneous.handle(error);
				throw throwError(3);
			})
		)
	}

	updateTopic(topicFormData, videoFile1?:any, videoFile2?:any) : Observable<any> {
		const formData = new FormData();
		if(videoFile1) { formData.append('video1', videoFile1); }
		if(videoFile2) { formData.append('video2', videoFile2); }
		formData.append('topic', topicFormData.name);
		formData.append('keywords', topicFormData.keywords);
		formData.append('related_videos', topicFormData.related_videos);
		formData.append('chapter_details_id', topicFormData.chapter_details_id);
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.post<any>(this.constants.UPDATE_TOPIC_URL, formData, httpOptions)
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
