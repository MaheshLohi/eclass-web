import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';
import { HttpErrorHandlerService } from '@sharedServices/httpErrorHandler/httpErrorHandler.service';

@Injectable({
 	providedIn: 'root'
})
export class AdminFacultiesService {

 	constructor(private httpService: HttpClientService,
    public loggerService: LoggerService,
	private constants: Constants,
	private httpErrorHandler : HttpErrorHandlerService) { }

	getFaculties(selectedDepartmentId, selectedSectionId) {
		return new Promise((resolve, reject) => {
		  	this.httpService.get(this.constants.FACULTIES_LIST_URL + '/' + selectedDepartmentId + '/' + selectedSectionId)
		  	.subscribe((response) => {
			  	if(response && response.users && response.users.length) {
				  	resolve(response.users);
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
	  
	addFaculties(facultiesData, filterData) {
		const formData = new FormData();
		formData.append('faculties', facultiesData.faculties_file);
		formData.append('department_id', filterData.department_id);
		formData.append('inst_class_id', filterData.inst_class_id);
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
