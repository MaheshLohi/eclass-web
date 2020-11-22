import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';
import { HttpErrorHandlerService } from '@sharedServices/httpErrorHandler/httpErrorHandler.service';

@Injectable({
  	providedIn: 'root'
})
export class SuperAdminAdminsService {

	constructor(private httpService: HttpClientService,
	public loggerService: LoggerService,
	private constants: Constants,
	private httpErrorHandler : HttpErrorHandlerService) {}

	getAdmins() {
		return new Promise((resolve, reject) => {
		  	this.httpService.get(this.constants.ADMINS_LIST_URL)
		  	.subscribe((response) => {
			  	if(response && response.data && response.data.length) {
				  	resolve(response.data);
			  	}
			  	else {
				  	reject()
			  	}
		  	}, (error) => {
				this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
				reject(error);
		  	});
		});
  	};
  
  	addAdmin(adminData) {
		const formData = new FormData();
		formData.append('name', adminData.name);
		formData.append('email', adminData.email);
		formData.append('password', adminData.password);
		formData.append('inst_id', adminData.inst_id);
		return new Promise((resolve, reject) => {
			this.httpService.postWithFormData(this.constants.ADD_ADMIN_URL, formData)
			.subscribe((response) => {
				resolve(response);
			}, (error) => {
				this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
				reject(error);
			});
		});
  	};
}