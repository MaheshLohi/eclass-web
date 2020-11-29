import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';
import { StorageService } from '@sharedServices/storage/storage.service';
import { HttpErrorHandlerService } from '@sharedServices/httpErrorHandler/httpErrorHandler.service';

@Injectable({
  	providedIn: 'root'
})
export class StudentSubjectService {

	userDetails : any = {};

	constructor(private httpService: HttpClientService,
	public loggerService: LoggerService,
	private constants: Constants,
	private storageService : StorageService,
	private httpErrorHandler : HttpErrorHandlerService) { }

	getSubjectsList(semisterDetails) {
		this.userDetails = this.storageService.getData("User_Information");
		return new Promise((resolve, reject) => {
		  	this.httpService.get(this.constants.STUDENT_SUBJECTS_LIST_URL +  this.userDetails.inst_id + '/' + semisterDetails.id)
		  	.subscribe((response) => {
			  	if(response && response.data && response.data.length && response.data[0].subjects && response.data[0].subjects.data) {
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
}
