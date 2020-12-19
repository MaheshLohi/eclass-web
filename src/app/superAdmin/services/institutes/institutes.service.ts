import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';
import { MiscellaneousService } from '@app/shared/services/miscellaneous/miscellaneous.service';

@Injectable({
 	providedIn: 'root'
})
export class SuperAdminInstitutesService {

  	constructor(private httpService: HttpClientService,
    public loggerService: LoggerService,
	private constants: Constants,
	private miscellaneous : MiscellaneousService,
	private http: HttpClient) { }

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
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.post<any>(this.constants.ADD_INSTITUTE_URL, formData, httpOptions);
	};

	updateStatus(institute) {
		const formData = new FormData();
		formData.append('id', institute.id);
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.post<any>(this.constants.INSTITUTE_STATUS_UPDATE_URL, formData, httpOptions);
	};

	updateInstitute(editFormValue, logo) {
		const formData = new FormData();
		formData.append('id', editFormValue.id);
		formData.append('name', editFormValue.name);
		formData.append('phone_number', editFormValue.phone_number);
		formData.append('address', editFormValue.address);
		if(logo) { formData.append('logo', logo);}
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.post<any>(this.constants.INSTITUTE_UPDATE_URL, formData, httpOptions);
	}
  
}
