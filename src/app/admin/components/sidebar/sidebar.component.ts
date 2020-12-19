import { Component, OnInit } from '@angular/core';

import { Constants } from 'src/app/constants';
import { StorageService } from '@sharedServices/storage/storage.service';
import { MiscellaneousService } from '@sharedServices/miscellaneous/miscellaneous.service';

@Component({
	selector: 'app-admin-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {

	userType : string;
	sidemenus : any = [];
	userDetails : any = {};

	constructor(public constants: Constants,
	private storageService: StorageService,
	public miscellaneousService : MiscellaneousService) {};

 	ngOnInit() {
		this.userType = this.constants.ADMIN;
		this.userDetails = this.storageService.getData("User_Information");
		this.sidemenus = [{
			name : "DASHBOARD",
			icon : "fa fa-home",
			link : '/'+ this.userType +'/dashboard'
		},
		{
			name : "DEPARTMENTS",
			icon : "fas fa-university",
			link : '/'+ this.userType +"/departments"
		},
		{
			name : "SUBJECTS",
			icon : "fas fa-book-open",
			link : '/'+ this.userType +"/subjects"
		},
		{
			name : "CHAPTERS",
			icon : "fas fa-pen",
			link : '/'+ this.userType +"/chapters"
		},
		{
			name : "EXAMINATION",
			icon : "fas fa-clipboard",
			link : '/'+ this.userType +"/examination"
		},
		{
			name : "STUDENTS",
			icon : "fas fa-graduation-cap",
			link : '/'+ this.userType +"/students"
		},
		{
			name : "FACULTIES",
			icon : "fas fa-chalkboard-teacher",
			link : '/'+ this.userType +"/faculties"
		}];
  	};
}
