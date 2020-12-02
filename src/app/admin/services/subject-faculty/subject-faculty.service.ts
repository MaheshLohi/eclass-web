import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';
import { HttpErrorHandlerService } from '@sharedServices/httpErrorHandler/httpErrorHandler.service';

@Injectable({
  	providedIn: 'root'
})
export class AdminSubjectFacultyService {

	constructor(private httpService: HttpClientService,
	public loggerService: LoggerService,
	private constants: Constants,
	private httpErrorHandler : HttpErrorHandlerService) { }

	getSubjectFaculties(data) {
		return new Promise((resolve, reject) => {
		  	this.httpService.get(this.constants.SUBJECT_FAULTY_LIST_URL +  data.subject_id)
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
	  
	addSubjectFaculties(filterData, addFormValue) {
		const formData = new FormData();
		formData.append('subject_id', filterData.subject_id);
		formData.append('faculty_id', addFormValue.faculty_id);
		return new Promise((resolve, reject) => {
			this.httpService.postWithFormData(this.constants.ADD_SUBJECT_FACULTY_URL, formData)
			.subscribe((response) => {
				resolve(response);
			}, (error) => {
				this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
				reject(error);
			});
		});
	};
}
