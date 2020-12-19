import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';
import { StorageService } from '@sharedServices/storage/storage.service';

@Injectable({
 	providedIn: 'root'
})
export class AdminFacultiesService {

	userDetails : any = {};

 	constructor(private httpService: HttpClientService,
    public loggerService: LoggerService,
	private constants: Constants,
	private storageService : StorageService) { }

	getFaculties(filterData) {
		this.userDetails = this.storageService.getData("User_Information");
		return new Promise((resolve, reject) => {
		  	this.httpService.get(this.constants.FACULTIES_LIST_URL + this.userDetails.inst_id + '/' + filterData.department_id)
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
	  
	addFaculties(filterData, faculties) {
		this.userDetails = this.storageService.getData("User_Information");
		const formData = new FormData();
		formData.append('faculties', faculties);
		formData.append('department_id', filterData.department_id);
		formData.append('inst_id', this.userDetails.inst_id);
		return new Promise((resolve, reject) => {
			this.httpService.postWithFormData(this.constants.ADD_FACULTIES_URL, formData)
			.subscribe((response) => {
				resolve(response);
			}, (error) => {
				reject(error);
			});
		});
	};

	deleteFaculty(facultyData) {
		return new Promise((resolve, reject) => {
		  	this.httpService.delete(this.constants.FACULTY_DELETE_URL + facultyData.id)
		  	.subscribe((response) => {
				resolve(response);
		  	}, (error) => {
			  	reject(error);
		  	});
		});
	};
}
