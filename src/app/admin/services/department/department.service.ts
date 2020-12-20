import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '@app/constants';
import { StorageService } from '@sharedServices/storage/storage.service';

@Injectable({
  	providedIn: 'root'
})
export class AdminDepartmentService {

	userDetails : any = {};

	constructor(private constants: Constants,
	private http: HttpClient,
	private storageService : StorageService) { }

	getDepartments() {
		return this.http.get<any>(this.constants.DEPARTMENTS_LIST_URL)
		.pipe(
			map(response => { 
				if (response && response.data && response.data.length) {
				  	return response; 
				} else {
					throw throwError(0);
				}
			})
		)
	};
	  
	getDepartmentsAndSections() {
		this.userDetails = this.storageService.getData("User_Information");
		return this.http.get<any>(this.constants.DEPARTMENTS_AND_SECTIONS_LIST_URL + this.userDetails.inst_id)
		.pipe(
			map(response => { 
				if(response && response.data) { 
					let result = response.data
					if(result.departments && result.inst_class && result.departments.length && result.inst_class.length) {
						return response.data;
					}
				}
				else {
					throw throwError(0);
				}
			})
		)
	};

	addDepartment(selectedFile) {
		const formData = new FormData();
		formData.append('departments', selectedFile);
		return this.http.post<any>(this.constants.ADD_DEPARTMENT_URL, formData);
	};
}