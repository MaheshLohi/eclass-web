import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Constants } from '@app/constants';
import { MiscellaneousService } from '@app/shared/services/miscellaneous/miscellaneous.service';
import { StorageService } from '@sharedServices/storage/storage.service';

@Injectable({
 	providedIn: 'root'
})
export class AdminSubjectsService {

	userDetails : any = {};

	constructor(private constants: Constants,
	private http: HttpClient,
	private miscellaneous : MiscellaneousService,
	private storageService : StorageService) { }

	getSubjects(selectedDepartmentId, selectedSectionId) : Observable<any> {
		this.userDetails = this.storageService.getData("User_Information");
		const httpOptions = this.miscellaneous.getHttpOptionsWithContentType();
		return this.http.get<any>(this.constants.SUBJECTS_LIST_URL + this.userDetails.inst_id + '/' + selectedDepartmentId + '/' + selectedSectionId, httpOptions)
		.pipe(
			map(response => { 
				if (response && response.data && response.data.length) {
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
	  
	addSubjects(selectedFile) : Observable<any> {
		this.userDetails = this.storageService.getData("User_Information");
		const formData = new FormData();
		formData.append('subjects', selectedFile);
		formData.append('inst_id', this.userDetails.inst_id);
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.post<any>(this.constants.ADD_SUBJECTS_URL, formData, httpOptions)
		.pipe(
			map(response => { 
				return response;
			}),
			catchError((error : HttpErrorResponse)=> {
				this.miscellaneous.handle(error);
				throw throwError(3);
			})
		)
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
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.post<any>(this.constants.ADD_SUBJECT_SYLLABUS_URL, formData, httpOptions)
		.pipe(
			map(response => { 
				return response;
			}),
			catchError((error : HttpErrorResponse)=> {
				this.miscellaneous.handle(error);
				throw throwError(3);
			})
		)
	};

	assignFaculties(assignFacultyForm, subjectId) : Observable<any> {
		const formData = new FormData();
		formData.append('subject_id', subjectId);
		formData.append('faculty_id', assignFacultyForm.faculty_id);
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.post<any>(this.constants.ADD_SUBJECT_FACULTY_URL, formData, httpOptions)
		.pipe(
			map(response => { 
				return response;
			}),
			catchError((error : HttpErrorResponse)=> {
				this.miscellaneous.handle(error);
				throw throwError(3);
			})
		)
	};
}
