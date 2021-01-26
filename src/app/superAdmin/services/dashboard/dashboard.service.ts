import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '@app/constants';

@Injectable({
    providedIn: 'root'
})
export class SuperAdminDashboardService {

	constructor(private constants: Constants,
	private http: HttpClient) { }

	getDashboardData(): Observable<any> {
		return this.http.get<any>(this.constants.SUPER_ADMIN_DASHBOARD_LIST_URL)
		.pipe(
			map(response => { 
				if (response && response.data) {
				  	return response.data; 
				}
				throw 0;
			})
		)
	};
}
