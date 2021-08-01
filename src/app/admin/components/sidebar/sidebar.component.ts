import { Component, OnInit, HostListener } from '@angular/core';
declare var $: any;

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
	width : number = window.innerWidth;

	constructor(public _constants: Constants,
	private _storage: StorageService,
	public _miscellaneous : MiscellaneousService) {};

	@HostListener('window:resize')
	onResize() {
		this.width = window.innerWidth;
	};

 	ngOnInit() {
		this.userType = this._constants.ADMIN;
		this.userDetails = this._storage.getData("userDetails");
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
			name : "EXAMINATIONS",
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
	  
	minimizeSidemenu() {
		if(this.width <= 768) {
			$('body').removeClass('sidebar-open');
			$('body').addClass('sidebar-collapse');
		}
	};
}
