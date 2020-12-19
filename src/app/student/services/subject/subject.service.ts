import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';
import { StorageService } from '@sharedServices/storage/storage.service';

@Injectable({
  	providedIn: 'root'
})
export class StudentSubjectService {

	userDetails : any = {};

	constructor(private httpService: HttpClientService,
	public loggerService: LoggerService,
	private constants: Constants,
	private storageService : StorageService) { }

	getSubjectsList(semesterDetails) {
		this.userDetails = this.storageService.getData("User_Information");
		return new Promise((resolve, reject) => {
		  	this.httpService.get(this.constants.STUDENT_SUBJECTS_LIST_URL +  this.userDetails.inst_id + '/' + semesterDetails.id)
		  	.subscribe((response) => {
			  	if(response && response.data && response.data.length && response.data[0].subjects && response.data[0].subjects.data) {
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

	getSubjectDetails(subjectId) {
		return new Promise((resolve, reject) => {
		  	this.httpService.get(this.constants.ADMIN_SUBJECTS_DETAILS_URL + subjectId)
		  	.subscribe((response) => {
			  	if(response && response.data) {
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
}
