import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';
import { HttpErrorHandlerService } from '@sharedServices/httpErrorHandler/httpErrorHandler.service';

@Injectable({
 	providedIn: 'root'
})
export class AdminSubjectsService {

	constructor(private httpService: HttpClientService,
	public loggerService: LoggerService,
	private constants: Constants,
	private httpErrorHandler : HttpErrorHandlerService) { }

	getSubjects(selectedDepartmentId, selectedSectionId) {
		return new Promise((resolve, reject) => {
		  	this.httpService.get(this.constants.SUBJECTS_LIST_URL +  selectedDepartmentId + '/' + selectedSectionId)
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
	  
	addSubjects(filterData, selectedFile) {
		const formData = new FormData();
		formData.append('subjects', selectedFile);
		formData.append('department_id', filterData.department_id);
		formData.append('inst_class_id', filterData.inst_class_id);
		return new Promise((resolve, reject) => {
			this.httpService.postWithFormData(this.constants.ADD_SUBJECTS_URL, formData)
			.subscribe((response) => {
				resolve(response);
			}, (error) => {
				this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
				reject(error);
			});
		});
	};

	addSubjectSyllabus(subject_id, selectedFile) {
		const formData = new FormData();
		formData.append('syllabus', selectedFile);
		formData.append('subject_id', subject_id);
		return new Promise((resolve, reject) => {
			this.httpService.postWithFormData(this.constants.ADD_SUBJECT_SYLLABUS_URL, formData)
			.subscribe((response) => {
				resolve(response);
			}, (error) => {
				this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
				reject(error);
			});
		});
	};
}
