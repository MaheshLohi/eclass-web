import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '@app/constants';

@Injectable({
  	providedIn: 'root'
})
export class AdminTopicService {

	constructor(private constants: Constants,
	private http: HttpClient) { }

	getTopicsList(chapterId) : Observable<any> {
		return this.http.get<any>(this.constants.ADMIN_TOPICS_LIST_URL + chapterId)
		.pipe(
			map(response => { 
				if (response && response.data && response.data.length) {
					let result = response.data[0];
					if(result.chapter_details && result.chapter_details.data && result.chapter_details.data.length) {
						return result;
					}
					throw 0;
				} 
				throw 0;
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
		return this.http.post<any>(this.constants.UPDATE_TOPIC_URL, formData);
	}
}
