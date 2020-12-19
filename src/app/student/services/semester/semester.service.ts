import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';
import { StorageService } from '@sharedServices/storage/storage.service';

@Injectable({
    providedIn: 'root'
})
export class StudentSemesterService {

	userDetails : any = {};

	constructor(private httpService: HttpClientService,
	public loggerService: LoggerService,
	private constants: Constants,
	private storageService : StorageService) { }

	getSemestersList() {
		this.userDetails = this.storageService.getData("User_Information");
		return new Promise((resolve, reject) => {
			this.httpService.get(this.constants.DEPARTMENTS_AND_SECTIONS_LIST_URL + this.userDetails.inst_id)
			.subscribe((response) => {
				if(response && response.data) {
					let result = response.data;
					if(result.departments && result.inst_class && result.departments.length && result.inst_class.length) {
						resolve(response.data);
					}
					else {
						reject();
					}
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
