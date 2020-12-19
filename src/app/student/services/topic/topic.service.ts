import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';

@Injectable({
    providedIn: 'root'
})
export class StudentTopicService {

	constructor(private httpService: HttpClientService,
	public loggerService: LoggerService,
	private constants: Constants) { }

	getTopicsList(chapterId) {
		return new Promise((resolve, reject) => {
			this.httpService.getWithCustomHeader(this.constants.STUDENT_TOPICS_LIST_URL +  chapterId)
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
				reject(error);
			});
		});
	}
}
