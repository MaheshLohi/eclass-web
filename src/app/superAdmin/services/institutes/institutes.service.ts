import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';
import { HttpErrorHandlerService } from '@sharedServices/httpErrorHandler/httpErrorHandler.service';

@Injectable({
 	providedIn: 'root'
})
export class SuperAdminInstitutesService {

  	constructor(private httpService: HttpClientService,
    public loggerService: LoggerService,
	private constants: Constants,
	private httpErrorHandler : HttpErrorHandlerService) { }

	getInstitutes() {
      	return new Promise((resolve, reject) => {
			this.httpService.get(this.constants.INSTITUTES_LIST_URL)
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
	
	addInstitute(instituteData) {
		const formData = new FormData();
		formData.append('logo', instituteData.institute_logo);
		formData.append('name', instituteData.name);
		formData.append('phone_number', instituteData.phone);
		formData.append('address', instituteData.address);
		return new Promise((resolve, reject) => {
			this.httpService.postWithFormData(this.constants.ADD_INSTITUTE_URL, formData)
			.subscribe((response) => {
				resolve(response);
			}, (error) => {
				this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
				reject(error);
			});
		});
	};
  
}
