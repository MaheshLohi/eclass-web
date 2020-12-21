import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '@app/constants';
import { StorageService } from '@sharedServices/storage/storage.service';

@Injectable({
  	providedIn: 'root'
})
export class StudentSubjectService {

	userDetails : any = {};

	constructor(private constants: Constants,
	private http: HttpClient,
	private storageService : StorageService) { }

	getSubjectsList(semesterDetails): Observable<any> {
		this.userDetails = this.storageService.getData("userDetails");
		return this.http.get<any>(this.constants.STUDENT_SUBJECTS_LIST_URL + this.userDetails.inst_id + '/' + semesterDetails.id)
		.pipe(
			map(response => { 
				if(response && response.data && response.data.length && response.data[0].subjects && response.data[0].subjects.data) {
					return response.data; 
				} 
				throw 0;
			})
		)
	};

	getSubjectDetails(subjectId) {
		return this.http.get<any>(this.constants.ADMIN_SUBJECTS_DETAILS_URL + subjectId)
		.pipe(
			map(response => { 
				if(response && response.data) {
					return response.data; 	
				}
				throw 0;
			})
		)
	};
}
