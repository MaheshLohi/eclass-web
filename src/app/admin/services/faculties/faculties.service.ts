import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '@app/constants';
import { StorageService } from '@sharedServices/storage/storage.service';

@Injectable({
 	providedIn: 'root'
})
export class AdminFacultiesService {

	userDetails : any = {};

	constructor(private constants: Constants,
	private http: HttpClient,
	private storageService : StorageService) { }

	getFaculties(filterData) : Observable<any> {
		this.userDetails = this.storageService.getData("userDetails");
		return this.http.get<any>(this.constants.FACULTIES_LIST_URL + this.userDetails.inst_id + '/' + filterData.department_id)
		.pipe(
			map(response => { 
				if (response && response.data && response.data.length) {
				  	return response.data; 
				}
				throw 0;
			})
		)
	};
	  
	addFaculties(filterData, data) : Observable<any>  {
		this.userDetails = this.storageService.getData("userDetails");
		const formData = new FormData();
		formData.append('faculties', data.faculties);
		formData.append('department_id', filterData.department_id);
		formData.append('inst_id', this.userDetails.inst_id);
		return this.http.post<any>(this.constants.ADD_FACULTIES_URL, formData);
	};

	deleteFaculty(facultyData): Observable<any> {
		return this.http.delete<any>(this.constants.FACULTY_DELETE_URL + facultyData.id);
	};
}
