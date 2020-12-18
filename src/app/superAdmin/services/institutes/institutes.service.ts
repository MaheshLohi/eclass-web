import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';
import { HttpErrorHandlerService } from '@sharedServices/httpErrorHandler/httpErrorHandler.service';
import { MiscellaneousService } from '@app/shared/services/miscellaneous/miscellaneous.service';

@Injectable({
 	providedIn: 'root'
})
export class SuperAdminInstitutesService {

  	constructor(private httpService: HttpClientService,
    public loggerService: LoggerService,
	private constants: Constants,
	private miscellaneous : MiscellaneousService,
	private http: HttpClient,
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
	
	addInstitute(instituteData,selectedFile) {
		const formData = new FormData();
		formData.append('logo', selectedFile);
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

	updateStatus(institute) {
		const formData = new FormData();
		formData.append('id', institute.id);
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.post<any>(this.constants.INSTITUTE_STATUS_UPDATE_URL, formData, httpOptions);
	}
  
}
