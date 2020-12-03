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
			icon : "fas fa-tachometer-alt",
			link : '/'+ this.userType +'/home'
		},{
			name : "EXAMINATION",
			icon : "fas fa-clipboard",
			link : '/'+ this.userType +'/examination'
		},{
			name : "WISHLIST",
			icon : "fa fa-heart",
			link : '/'+ this.userType +'/wishlist'
		},{
			name : "DOWNLOADS",
			icon : "fa fa-download",
			link : '/'+ this.userType +'/downloads'
		},{
			name : "FEEDBACK",
			icon : "fas fa-comments",
			link : '/'+ this.userType +'/feedback'
		}];
  	};
}
