import { Component, OnInit } from '@angular/core';

import { Constants } from 'src/app/constants';
import { StorageService } from '@sharedServices/storage/storage.service';
import { MiscellaneousService } from '@app/shared/services/miscellaneous/miscellaneous.service';

@Component({
  	selector: 'app-faculty-sidebar',
  	templateUrl: './sidebar.component.html',
 	styleUrls: ['./sidebar.component.scss']
})
export class FacultySidebarComponent implements OnInit {

  	userType : string;
	sidemenus : any = [];
	userDetails : any = {};

	constructor(public _constants: Constants,
	public _miscellaneous : MiscellaneousService,
	private _storage: StorageService) {};

	ngOnInit() {
		this.userType = this._constants.FACULTY;
		this.userDetails = this._storage.getData("userDetails");
		this.sidemenus = [{
			name : "DASHBOARD",
			icon : "fa fa-home",
			link : '/'+ this.userType +'/dashboard'
		},{
			name : "QUESTIONS",
			icon : "fa fa-question-circle",
			link : '/'+ this.userType +'/subjects'
		}];
  	};

}
