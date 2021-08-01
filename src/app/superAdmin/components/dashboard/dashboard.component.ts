import { Component, OnInit } from '@angular/core';

import { LoaderService } from '@sharedServices/loader/loader.service';
import { SuperAdminDashboardService } from '@superAdminServices/dashboard/dashboard.service';

@Component({
  	selector: 'app-super-admin-dashboard',
  	templateUrl: './dashboard.component.html',
  	styleUrls: ['./dashboard.component.scss']
})
export class SuperAdminDashboardComponent implements OnInit {

	dashboardDataStatus : any = 2;
	dashboardData : any = {};
	dashboardReportCards : any = [];

  	constructor(private _loader: LoaderService,
	private _dashboard : SuperAdminDashboardService) { }

  	ngOnInit() {
		this.getDashboardData();
	}

	resetDashboardData() {
		this.dashboardDataStatus = 2;
		this.dashboardData = {};
		this._loader.showLoader();
	};

	getDashboardData() {
		this.resetDashboardData();
		this._dashboard.getDashboardData()
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.dashboardDataStatus = 1;
			this.dashboardData = response;
			this.prepareDashboardReportCards();
		}, (errorCode) => {
			this._loader.hideLoader();
			this.dashboardDataStatus = errorCode;
		});
	};
	  
	prepareDashboardReportCards() {
		this.dashboardReportCards = [{
			name : "CLASSES",
			className : 'bg-red',
			icon : 'fas fa-university',
			value : this.dashboardData.classes
		},
		{
			name : "STUDENTS",
			className : 'bg-info',
			icon : 'fas fa-graduation-cap',
			value : this.dashboardData.students
		},
		{
			name : "FACULTIES",
			className : 'bg-warning',
			icon : 'fas fa-chalkboard-teacher',
			value : this.dashboardData.faculties
		},
		{
			name : "INSTITUTES",
			className : 'bg-red',
			icon : 'fas fa-graduation-cap',
			value : this.dashboardData.institutes
		},
		{
			name : "VIDEOS",
			className : 'bg-warning',
			icon : 'fa fa-video',
			value : this.dashboardData.videos
		}]
	}

}
