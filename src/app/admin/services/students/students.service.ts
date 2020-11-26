import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';
import { StorageService } from '@sharedServices/storage/storage.service';
import { HttpErrorHandlerService } from '@sharedServices/httpErrorHandler/httpErrorHandler.service';

@Injectable({
  	providedIn: 'root'
})
export class AdminStudentsService {

	userDetails : any = {};

	constructor(private httpService: HttpClientService,
	public loggerService: LoggerService,
	private constants: Constants,
	private storageService : StorageService,
	private httpErrorHandler : HttpErrorHandlerService) { }

	getStudents(selectedDepartmentId, selectedSectionId) {
		this.userDetails = this.storageService.getData("User_Information");
		return new Promise((resolve, reject) => {
		  	this.httpService.get(this.constants.STUDENTS_LIST_URL + this.userDetails.inst_id + '/' + selectedDepartmentId + '/' + selectedSectionId)
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
	  
	addStudents(studentsData, filterData) {
		this.userDetails = this.storageService.getData("User_Information");
		const formData = new FormData();
		formData.append('students', studentsData.students_file);
		formData.append('department_id', filterData.department_id);
		formData.append('inst_class_id', filterData.inst_class_id);
		formData.append('inst_id', this.userDetails.inst_id);
		return new Promise((resolve, reject) => {
			this.httpService.postWithFormData(this.constants.ADD_STUDENTS_URL, formData)
			.subscribe((response) => {
				resolve(response);
			}, (error) => {
				this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
				reject(error);
			});
		});
	};
}
