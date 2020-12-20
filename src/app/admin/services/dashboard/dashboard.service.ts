import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Constants } from '@app/constants';
import { StorageService } from '@sharedServices/storage/storage.service';
import { MiscellaneousService } from '@app/shared/services/miscellaneous/miscellaneous.service';

@Injectable({
    providedIn: 'root'
})
export class AdminDashboardService {

  	userDetails : any = {};

	constructor(private constants: Constants,
	private http: HttpClient,
	private storageService : StorageService,
	private miscellaneous : MiscellaneousService) { }

	getDashboardData() : Observable<any> {
		this.userDetails = this.storageService.getData("User_Information");
		const httpOptions = this.miscellaneous.getHttpOptionsWithContentType();
		return this.http.get<any>(this.constants.ADMIN_DASHBOARD_LIST_URL + this.userDetails.inst_id, httpOptions)
		.pipe(
			map(response => { 
				if (response) {
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
}
