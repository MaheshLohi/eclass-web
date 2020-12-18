import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';
import { HttpClient } from '@angular/common/http';
import { MiscellaneousService } from '@app/shared/services/miscellaneous/miscellaneous.service';

@Injectable({
  	providedIn: 'root'
})
export class FacultySubjectsService {

  	constructor(private constants: Constants,
	private miscellaneous : MiscellaneousService,
	private http: HttpClient) { }

	getSubjectsList() {
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.get(this.constants.FACULTY_SUBJECTS_LIST_URL, httpOptions);
	};

}
