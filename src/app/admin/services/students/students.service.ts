import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '@app/constants';
import { StorageService } from '@sharedServices/storage/storage.service';

@Injectable({
  	providedIn: 'root'
})
export class AdminStudentsService {

	userDetails : any = {};

	constructor(private constants: Constants,
	private http: HttpClient,
	private storageService : StorageService) { }

	getStudents(selectedDepartmentId, selectedSectionId) : Observable<any> {
		this.userDetails = this.storageService.getData("userDetails");
		return this.http.get<any>(this.constants.STUDENTS_LIST_URL + this.userDetails.inst_id + '/' + selectedDepartmentId + '/' + selectedSectionId)
		.pipe(
			map(response => { 
				if (response && response.data && response.data.length) {
				  	return response.data; 
				}
				throw 0;
			})
		)
	};
	  
	addStudents(filterData) : Observable<any> {
		this.userDetails = this.storageService.getData("userDetails");
		const formData = new FormData();
		formData.append('students', filterData.students);
		formData.append('department_id', filterData.department_id);
		formData.append('inst_class_id', filterData.inst_class_id);
		formData.append('inst_id', this.userDetails.inst_id);
		return this.http.post<any>(this.constants.ADD_STUDENTS_URL, formData);
	};
}
