import { Component, OnInit } from '@angular/core';

@Component({
  	selector: 'app-admin-dashboard',
  	templateUrl: './dashboard.component.html',
  	styleUrls: ['./dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

	dashboardReportCards : any = [];
	
  	constructor() { }

  	ngOnInit() {
		this.prepareDashboardReportCards();
	}
	  
	prepareDashboardReportCards() {
		this.dashboardReportCards = [
		{
			name : "FACULTIES",
			link : '/admin/faculties',
			className : 'bg-warning',
			icon : 'fas fa-chalkboard-teacher'
		},
		{
			name : "STUDENTS",
			link : '/admin/students',
			className : 'bg-info',
			icon : 'fas fa-graduation-cap'
		},
		{
			name : "DEPARTMENTS",
			link : '/admin/departments',
			className : 'bg-red',
			icon : 'fas fa-university'
		},
		{
			name : "SUBJECTS",
			link : '/admin/subjects',
			className : 'bg-success',
			icon : 'fas fa-book-open'
		}]
	} 

}
