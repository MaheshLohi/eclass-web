import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';
import { HttpErrorHandlerService } from '@sharedServices/httpErrorHandler/httpErrorHandler.service';

@Injectable({
  	providedIn: 'root'
})
export class AdminDepartmentService {

	constructor(private httpService: HttpClientService,
	public loggerService: LoggerService,
	private constants: Constants,
	private httpErrorHandler : HttpErrorHandlerService) { }

	getDepartments() {
		return new Promise((resolve, reject) => {
		  	this.httpService.get(this.constants.DEPARTMENTS_LIST_URL)
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
	  
	getDepartmentsAndSections() {
		return new Promise((resolve, reject) => {
			this.httpService.get(this.constants.DEPARTMENTS_AND_SECTIONS_LIST_URL)
			.subscribe((response) => {
				if(response && response.data) {
					let result = response.data;
					if(result.departments && result.inst_class && result.departments.length && result.inst_class.length) {
						resolve(response.data);
					}
					else {
						reject();
					}
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

	addDepartment(selectedFile) {
		const formData = new FormData();
		formData.append('departments', selectedFile);
		return new Promise((resolve, reject) => {
			this.httpService.postWithFormData(this.constants.ADD_DEPARTMENT_URL, formData)
			.subscribe((response) => {
				resolve(response);
			}, (error) => {
				this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
				reject(error);
			});
		});
	};
}