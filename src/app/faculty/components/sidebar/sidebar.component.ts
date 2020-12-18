import { Component, OnInit } from '@angular/core';

import { Constants } from 'src/app/constants';
import { StorageService } from '@sharedServices/storage/storage.service';

@Component({
  selector: 'app-faculty-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class FacultySidebarComponent implements OnInit {

  	userType : string;
	sidemenus : any = [];
	userDetails : any = {};

	constructor(private constants: Constants,
	private storageService: StorageService) {};

	ngOnInit() {
		this.userType = this.constants.FACULTY;
		this.userDetails = this.storageService.getData("User_Information");
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
