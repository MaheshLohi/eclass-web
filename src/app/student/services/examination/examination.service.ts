import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';
import { HttpErrorHandlerService } from '@sharedServices/httpErrorHandler/httpErrorHandler.service';

@Injectable({
  	providedIn: 'root'
})
export class StudentExaminationService {

	constructor(private httpService: HttpClientService,
	public loggerService: LoggerService,
	private constants: Constants,
	private httpErrorHandler : HttpErrorHandlerService) { }

	getExamsList(subjectId) {
		return new Promise((resolve, reject) => {
			this.httpService.get(this.constants.STUDENT_EXAMS_LIST_URL + subjectId)
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
}
