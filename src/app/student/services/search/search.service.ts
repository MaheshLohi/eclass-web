import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';

@Injectable({
  	providedIn: 'root'
})
export class StudentSearchService {

	constructor(private httpService: HttpClientService,
	public loggerService: LoggerService,
	private constants: Constants) { }

	getSearchResultsList(searchString) {
		return new Promise((resolve, reject) => {
			this.httpService.get(this.constants.STUDENT_SEARCH_LIST_URL + searchString)
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
}
