import { Component, OnInit, HostListener } from '@angular/core';
declare var $: any;

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
	width : number = window.innerWidth;

	constructor(public _constants: Constants,
	public _miscellaneous : MiscellaneousService,
	private _storage: StorageService) {};

	@HostListener('window:resize')
	onResize() {
		this.width = window.innerWidth;
	};

	ngOnInit() {
		this.userType = this._constants.FACULTY;
		this.userDetails = this._storage.getData("userDetails");
		this.sidemenus = [{
			name : "DASHBOARD",
			icon : "fa fa-home",
			link : '/'+ this.userType +'/dashboard'
		},
		{
			name : "QUESTIONS",
			icon : "fa fa-question-circle",
			link : '/'+ this.userType +'/subjects'

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
		];
		

	};
	  
	minimizeSidemenu() {
		if(this.width <= 768) {
			$('body').removeClass('sidebar-open');
			$('body').addClass('sidebar-collapse');
		}
	};

}
