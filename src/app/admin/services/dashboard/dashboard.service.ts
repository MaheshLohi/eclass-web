import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '@app/constants';
import { StorageService } from '@sharedServices/storage/storage.service';

@Injectable({
    providedIn: 'root'
})
export class AdminDashboardService {

  	userDetails : any = {};

	constructor(private constants: Constants,
	private http: HttpClient,
	private storageService : StorageService) { }

	getDashboardData(): Observable<any> {
		this.userDetails = this.storageService.getData("userDetails");
		return this.http.get<any>(this.constants.ADMIN_DASHBOARD_LIST_URL + this.userDetails.inst_id)
		.pipe(
			map(response => { 
				if (response) {
				  	return response; 
				}
				throw 0;
			})
		)
	};
}
