import { Component, OnInit } from '@angular/core';

import { LoaderService } from '@sharedServices/loader/loader.service';
import { AdminDashboardService } from '@adminServices/dashboard/dashboard.service';

@Component({
  	selector: 'app-admin-dashboard',
  	templateUrl: './dashboard.component.html',
  	styleUrls: ['./dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

	dashboardReportCards : any = [];
	dashboardDataStatus : number = 2;
	dashboardData : any = {};
	
  	constructor(private _loader: LoaderService,
	private _dashboard : AdminDashboardService) { }

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
			name : "DEPARTMENTS",
			link : '/admin/departments',
			className : 'bg-red',
			icon : 'fas fa-university',
			value : this.dashboardData.depts_count
		},
		{
			name : "SUBJECTS",
			link : '/admin/subjects',
			className : 'bg-success',
			icon : 'fas fa-book-open',
			value : this.dashboardData.subjects_count
		},
		{
			name : "STUDENTS",
			link : '/admin/students',
			className : 'bg-info',
			icon : 'fas fa-graduation-cap',
			value : this.dashboardData.student_count
		},
		{
			name : "FACULTIES",
			link : '/admin/faculties',
			className : 'bg-warning',
			icon : 'fas fa-chalkboard-teacher',
			value : this.dashboardData.faculties_count
		}
		]
	} 

}
