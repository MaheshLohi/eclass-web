import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Constants } from '@app/constants';
import { StorageService } from '@sharedServices/storage/storage.service';
import { MiscellaneousService } from '@sharedServices/miscellaneous/miscellaneous.service';


@Injectable({
  	providedIn: 'root'
})
export class LoginService {

	constructor(private http: HttpClient,
	private constants: Constants,
	private storageService: StorageService,
	private miscellaneous : MiscellaneousService) { };

	doLogin(loginData) : Observable<any> {
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.post<any>(this.constants.LOGIN_URL, loginData, httpOptions)
		.pipe(
			map(response => { 
				if (response && response.token) {
					this.storageService.setData('Authorization', response);
				  	return response; 
				} else {
					throw throwError(0);
				}
			}),
			catchError((error : HttpErrorResponse)=> {
				this.miscellaneous.handle(error);
				throw throwError(3);
			})
		)
	};

	getUserDetails() : Observable<any> {
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.get<any>(this.constants.USER_DETAILS_URL, httpOptions)
		.pipe(
			map(response => { 
				if (response && response.data) {
					this.storageService.setData('User_Information', response.data);
				  	return response.data; 
				} else {
					throw throwError(0);
				}
			}),
			catchError((error : HttpErrorResponse)=> {
				this.miscellaneous.handle(error);
				throw throwError(3);
			})
		)
	};
}
