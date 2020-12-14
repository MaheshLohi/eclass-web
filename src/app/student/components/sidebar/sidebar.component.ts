import { Component, OnInit } from '@angular/core';

import { Constants } from 'src/app/constants';
import { StorageService } from '@sharedServices/storage/storage.service';

@Component({
  selector: 'app-student-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class StudentSidebarComponent implements OnInit {

	userType : string;
	sidemenus : any = [];
	userDetails : any = {};

	constructor(private constants: Constants,
	private storageService: StorageService) {};

 	ngOnInit() {
		this.userType = this.constants.STUDENT;
		this.userDetails = this.storageService.getData("User_Information");
		this.sidemenus = [{
			name : "HOME",
			icon : "fa fa-home",
			link : '/'+ this.userType +'/home'
		},{
			name : "EXAMINATION",
			icon : "fa fa-graduation-cap",
			link : '/'+ this.userType +'/examination'
		},{
			name : "WISHLIST",
			icon : "far fa-heart",
			link : '/'+ this.userType +'/wishlist'
		},{
			name : "FEEDBACK",
			icon : "fas fa-comments",
			link : '/'+ this.userType +'/feedback'
		},{
			name : "HELP",
			icon : "fa fa-question-circle",
			link : '/'+ this.userType +'/help'
		},{
			name : "SEARCH",
			icon : "fa fa-search",
			link : '/'+ this.userType +'/search'
		},{
			name : "PROFILE",
			icon : "fa fa-user",
			link : '/'+ this.userType +'/profile'
		}];
  	};
}
