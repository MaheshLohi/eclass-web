import { Injectable } from '@angular/core';
import * as _ from "lodash";

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';
import { HttpErrorHandlerService } from '@sharedServices/httpErrorHandler/httpErrorHandler.service';

@Injectable({
    providedIn: 'root'
})
export class AdminExaminationService {

	constructor(private httpService: HttpClientService,
	public loggerService: LoggerService,
	private constants: Constants,
	private httpErrorHandler : HttpErrorHandlerService) { }

	getExamsList(data) {
		return new Promise((resolve, reject) => {
		  	this.httpService.get(this.constants.EXAMINATION_LIST_URL +  data.subject_id)
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
	  
	addExamination(filterData, addFormValue, selectedFile) {
		const formData = new FormData();
		formData.append('name', addFormValue.name);
		formData.append('subject_id', filterData.subject_id);
		formData.append('year', addFormValue.year);
		formData.append('paper', selectedFile);
		return new Promise((resolve, reject) => {
			this.httpService.postWithFormData(this.constants.ADD_EXAMINATION_URL, formData)
			.subscribe((response) => {
				resolve(response);
			}, (error) => {
				this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
				reject(error);
			});
		});
	};
}
