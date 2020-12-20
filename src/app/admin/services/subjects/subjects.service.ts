import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '@app/constants';
import { StorageService } from '@sharedServices/storage/storage.service';

@Injectable({
 	providedIn: 'root'
})
export class AdminSubjectsService {

	userDetails : any = {};

	constructor(private constants: Constants,
	private http: HttpClient,
	private storageService : StorageService) { }

	getSubjects(selectedDepartmentId, selectedSectionId) : Observable<any> {
		this.userDetails = this.storageService.getData("User_Information");
		return this.http.get<any>(this.constants.SUBJECTS_LIST_URL + this.userDetails.inst_id + '/' + selectedDepartmentId + '/' + selectedSectionId)
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
	  
	addSubjects(selectedFile) : Observable<any> {
		this.userDetails = this.storageService.getData("User_Information");
		const formData = new FormData();
		formData.append('subjects', selectedFile);
		formData.append('inst_id', this.userDetails.inst_id);
		return this.http.post<any>(this.constants.ADD_SUBJECTS_URL, formData);
	};

	uploadSubjectAttachment(subject_id, selectedFile, fileType) : Observable<any> {
		const formData = new FormData();
		if(fileType === 0) {
			formData.append('syllabus', selectedFile);
		}
		else {
			formData.append('bg_image', selectedFile);
		}
		formData.append('subject_id', subject_id);
		return this.http.post<any>(this.constants.ADD_SUBJECT_SYLLABUS_URL, formData);
	};

	assignFaculties(assignFacultyForm, subjectId) : Observable<any> {
		const formData = new FormData();
		formData.append('subject_id', subjectId);
		formData.append('faculty_id', assignFacultyForm.faculty_id);
		return this.http.post<any>(this.constants.ADD_SUBJECT_FACULTY_URL, formData);
	};
}
