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

	constructor(private _http: HttpClient,
	private _constants: Constants,
	private _storage: StorageService) { };

	doLogin(loginData) : Observable<any> {
		return this._http.post<any>(this._constants.LOGIN_URL, loginData)
		.pipe(
			map(response => { 
				if (response && response.token) {
					this._storage.setData('Authorization', response);
				  	return response; 
				}
				throw 0;
			})
		)
	};

	getUserDetails() : Observable<any> {
		return this._http.get<any>(this._constants.USER_DETAILS_URL)
		.pipe(
			map(response => { 
				if (response && response.data) {
					this._storage.setData('userDetails', response.data);
				  	return response.data; 
				}
				throw 0;
			})
		)
	};

	forgotPassword(data) : Observable<any> {
		return this._http.post<any>(this._constants.FORGOT_STUDENT_EMAIL, data)
		.pipe(
			map(response => { 
				if (response && response.status) {
				  	return response; 
				}
				throw 0;
			})
		)
	};

	adminForgotPassword(data) : Observable<any> {
		return this._http.post<any>(this._constants.FORGOT_ADMIn_EMAIL, data)
		.pipe(
			map(response => { 
				if (response && response.status) {
				  	return response; 
				}
				throw 0;
			})
		)
	};
}
