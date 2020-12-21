import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '@app/constants';
import { StorageService } from '@sharedServices/storage/storage.service';


@Injectable({
  	providedIn: 'root'
})
export class LoginService {

	constructor(private http: HttpClient,
	private constants: Constants,
	private storageService: StorageService) { };

	doLogin(loginData) : Observable<any> {
		return this.http.post<any>(this.constants.LOGIN_URL, loginData)
		.pipe(
			map(response => { 
				if (response && response.token) {
					this.storageService.setData('Authorization', response);
				  	return response; 
				}
				throw 0;
			})
		)
	};

	getUserDetails() : Observable<any> {
		return this.http.get<any>(this.constants.USER_DETAILS_URL)
		.pipe(
			map(response => { 
				if (response && response.data) {
					this.storageService.setData('userDetails', response.data);
				  	return response.data; 
				}
				throw 0;
			})
		)
	};
}
