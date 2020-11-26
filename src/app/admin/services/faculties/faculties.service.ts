import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';
import { StorageService } from '@sharedServices/storage/storage.service';
import { HttpErrorHandlerService } from '@sharedServices/httpErrorHandler/httpErrorHandler.service';

@Injectable({
 	providedIn: 'root'
})
export class AdminFacultiesService {

	userDetails : any = {};

 	constructor(private httpService: HttpClientService,
    public loggerService: LoggerService,
	private constants: Constants,
	private storageService : StorageService,
	private httpErrorHandler : HttpErrorHandlerService) { }

	getFaculties(filterData) {
		this.userDetails = this.storageService.getData("User_Information");
		return new Promise((resolve, reject) => {
		  	this.httpService.get(this.constants.FACULTIES_LIST_URL + this.userDetails.inst_id + '/' + filterData.department_id)
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
		this.userDetails = this.storageService.getData("User_Information");
		const formData = new FormData();
		formData.append('faculties', facultiesData.faculties_file);
		formData.append('department_id', filterData.department_id);
		formData.append('inst_id', filterData.inst_id);
		return new Promise((resolve, reject) => {
			this.httpService.postWithFormData(this.constants.ADD_FACULTIES_URL, formData)
			.subscribe((response) => {
				resolve(response);
			}, (error) => {
				this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
				reject(error);
			});
		});
	};
}
