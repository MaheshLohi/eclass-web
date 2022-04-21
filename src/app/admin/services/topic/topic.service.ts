import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

	updateTopic(topicFormData) : Observable<any> {
		const formData = new FormData();
		formData.append('topic', topicFormData.name);
		formData.append('video_id', topicFormData.video_id);
		if(topicFormData.keywords) {
			formData.append('keywords', topicFormData.keywords);
		}
		if(topicFormData.related_videos) {
			formData.append('related_videos', topicFormData.related_videos);
		}
		formData.append('chapter_details_id', topicFormData.chapter_details_id);
		return this.http.post<any>(this.constants.UPDATE_TOPIC_URL, formData);
	}


	deleteTopic(topic): Observable<any> {
		return this.http.delete<any>(this.constants.ADMIN_TOPICS_DELETE_URL + topic.id);
	}
}
