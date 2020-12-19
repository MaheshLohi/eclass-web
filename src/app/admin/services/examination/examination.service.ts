import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';

@Injectable({
    providedIn: 'root'
})
export class AdminExaminationService {

	constructor(private httpService: HttpClientService,
	public loggerService: LoggerService,
	private constants: Constants) { }

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
				reject(error);
			});
		});
	};
}
