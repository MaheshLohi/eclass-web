import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '@app/constants';

@Injectable({
  	providedIn: 'root'
})
export class FacultySubjectsService {

  	constructor(private _constants: Constants,
	private _http: HttpClient) { }

	getSubjectsList() : Observable<any> {
		return this._http.get<any>(this._constants.FACULTY_SUBJECTS_LIST_URL)
		.pipe(
			map(response => { 
				if (response && response.data && response.data.length) {
					return response.data;
				}
				throw 0;
			})
		)
	};

}
