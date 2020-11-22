import { Component, OnInit } from '@angular/core';

import { Constants } from 'src/app/constants';
import { StorageService } from '@sharedServices/storage/storage.service';

@Component({
	selector: 'app-super-admin-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SuperAdminSidebarComponent implements OnInit {

	userType : string;
	sidemenus : any = [];
	userDetails : any = {};

	constructor(private constants: Constants,
	private storageService: StorageService) {};

 	ngOnInit() {
		this.userType = this.constants.SUPER_ADMIN;
		this.userDetails = this.storageService.getData("User_Information");
		this.sidemenus = [{
			name : "DASHBOARD",
			icon : "fas fa-tachometer-alt",
			link : '/'+ this.userType +'/dashboard'
		},
		{
			name : "INSTITUTES",
			icon : "fas fa-university",
			link : '/'+ this.userType +"/institutes"
		},
		{
			name : "ADMINS",
			icon : "fas fa-chalkboard-teacher",
			link : '/'+ this.userType +"/admins"
		}];
  	};
}
