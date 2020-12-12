import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';
import { StorageService } from '@sharedServices/storage/storage.service';
import { HttpErrorHandlerService } from '@sharedServices/httpErrorHandler/httpErrorHandler.service';

@Injectable({
 	providedIn: 'root'
})
export class AdminSubjectsService {

	userDetails : any = {};

	constructor(private httpService: HttpClientService,
	public loggerService: LoggerService,
	private constants: Constants,
	private storageService : StorageService,
	private httpErrorHandler : HttpErrorHandlerService) { }

	getSubjects(selectedDepartmentId, selectedSectionId) {
		this.userDetails = this.storageService.getData("User_Information");
		return new Promise((resolve, reject) => {
		  	this.httpService.get(this.constants.SUBJECTS_LIST_URL + this.userDetails.inst_id + '/' + selectedDepartmentId + '/' + selectedSectionId)
		  	.subscribe((response) => {
			  	if(response && response.data && response.data.length) {
				  	resolve(response.data);
			  	}
			  	else {
				  	reject();
			  	}
		  	}, (error) => {
			  	this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
			  	reject(error);
		  	});
		});
	};
	  
	addSubjects(selectedFile) {
		this.userDetails = this.storageService.getData("User_Information");
		const formData = new FormData();
		formData.append('subjects', selectedFile);
		formData.append('inst_id', this.userDetails.inst_id);
		return new Promise((resolve, reject) => {
			this.httpService.postWithFormData(this.constants.ADD_SUBJECTS_URL, formData)
			.subscribe((response) => {
				resolve(response);
			}, (error) => {
				this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
				reject(error);
			});
		});
	};

	uploadSubjectAttachment(subject_id, selectedFile, fileType) {
		const formData = new FormData();
		if(fileType === 0) {
			formData.append('syllabus', selectedFile);
		}
		else {
			formData.append('bg_image', selectedFile);
		}
		formData.append('subject_id', subject_id);
		return new Promise((resolve, reject) => {
			this.httpService.postWithFormData(this.constants.ADD_SUBJECT_SYLLABUS_URL, formData)
			.subscribe((response) => {
				resolve(response);
			}, (error) => {
				this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
				reject(error);
			});
		});
	};

	assignFaculties(assignFacultyForm, subjectId) {
		const formData = new FormData();
		formData.append('subject_id', subjectId);
		formData.append('faculty_id', assignFacultyForm.faculty_id);
		return new Promise((resolve, reject) => {
			this.httpService.postWithFormData(this.constants.ADD_SUBJECT_FACULTY_URL, formData)
			.subscribe((response) => {
				resolve(response);
			}, (error) => {
				this.httpErrorHandler.handle(error, this.constants.DISPLAY_HTTP_ERROR_TOASTER);
				reject(error);
			});
		});
	};
}
