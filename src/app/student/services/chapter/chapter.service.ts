import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';

@Injectable({
  	providedIn: 'root'
})
export class StudentChapterService {

	constructor(private httpService: HttpClientService,
	public loggerService: LoggerService,
	private constants: Constants) { }

	getChaptersList(subjectId) {
		return new Promise((resolve, reject) => {
			this.httpService.get(this.constants.STUDENT_CHAPTERS_LIST_URL +  subjectId + '/chapters')
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
	}
}
