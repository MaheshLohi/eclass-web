import { Injectable } from '@angular/core';

import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { Constants } from '@app/constants';
import { StorageService } from '@sharedServices/storage/storage.service';
import { HttpErrorHandlerService } from '@sharedServices/httpErrorHandler/httpErrorHandler.service';

@Injectable({
  	providedIn: 'root'
})
export class LoginService {

	constructor(private httpService: HttpClientService,
	private constants: Constants,
	private storageService: StorageService,
	private httpErrorHandler : HttpErrorHandlerService) { };

	doLogin(loginData) {
		return new Promise((resolve, reject) => {
			this.httpService.post(this.constants.LOGIN_URL, loginData)
			.subscribe((response: any) => {
				if(response && response.token) {
					this.storageService.setData('Authorization', response);
					resolve(response);
				}
				else {
					reject();
				}
			}, (error) => {
				this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
				reject();
			});
		});
	};

	getUserDetails() {
		return new Promise((resolve, reject) => {
			this.httpService.get(this.constants.USER_DETAILS_URL)
			.subscribe((response: any) => {
				this.storageService.setData('User_Information', response);
				resolve(response);
			}, (error) => {
				this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
				reject(error);
			});
		});
	}
}
