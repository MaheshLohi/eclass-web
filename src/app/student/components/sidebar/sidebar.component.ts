import { Component, OnInit, HostListener } from '@angular/core';
declare var $: any;

import { Constants } from 'src/app/constants';
import { MiscellaneousService } from '@app/shared/services/miscellaneous/miscellaneous.service';
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
	width : number = window.innerWidth;

	constructor(public _constants: Constants,
	public _miscellaneous : MiscellaneousService,
	private _storage: StorageService) {};

	@HostListener('window:resize')
	onResize() {
		this.width = window.innerWidth;
	};

 	ngOnInit() {
		this.userType = this._constants.STUDENT;
		this.userDetails = this._storage.getData("userDetails");
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
	  
	minimizeSidemenu() {
		if(this.width <= 768) {
			$('body').removeClass('sidebar-open');
			$('body').addClass('sidebar-collapse');
		}
	};
}
