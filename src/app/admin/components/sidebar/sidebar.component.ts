import { Component, OnInit } from '@angular/core';

import { Constants } from 'src/app/constants';
import { StorageService } from '@sharedServices/storage/storage.service';

@Component({
	selector: 'app-admin-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {

	userType : string;
	sidemenus : any = [];
	userDetails : any = {};

	constructor(private constants: Constants,
	private storageService: StorageService) {};

 	ngOnInit() {
		this.userType = this.constants.ADMIN;
		this.userDetails = this.storageService.getData("User_Information");
		this.sidemenus = [{
			name : "DASHBOARD",
			icon : "fas fa-tachometer-alt",
			link : '/'+ this.userType +'/dashboard'
		},
		{
			name : "DEPARTMENTS",
			icon : "fas fa-university",
			link : '/'+ this.userType +"/departments"
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
			name : "SUBJECT_FACULTY",
			icon : "fas fa-user-plus",
			link : '/'+ this.userType +"/subject-faculty"
		}];
  	};
}
