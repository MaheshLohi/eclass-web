import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '@app/constants';

@Injectable({
    providedIn: 'root'
})
export class AdminExaminationService {

	constructor(private constants: Constants,
	private http: HttpClient) { }

	getExamsList(data) : Observable<any> {
		return this.http.get<any>(this.constants.EXAMINATION_LIST_URL +  data.subject_id)
		.pipe(
			map(response => { 
				if (response && response.data && response.data.length) {
				  	return response.data; 
				}
				throw 0;
			})
		)
	};
	  
	addExamination(filterData, addFormValue) : Observable<any> {
		const formData = new FormData();
		formData.append('name', addFormValue.name);
		formData.append('subject_id', filterData.subject_id);
		formData.append('year', addFormValue.year);
		formData.append('paper', addFormValue.paper);
		return this.http.post<any>(this.constants.ADD_EXAMINATION_URL, formData);
	};

	deleteExamPaper(paper) {
		return this.http.delete<any>(this.constants.EXAM_PAPER_DELETE_URL + paper.id);
	}
}
