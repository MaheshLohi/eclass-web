import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { LoaderService } from '@sharedServices/loader/loader.service';
import { LoginService } from '@sharedServices/login/login.service';

@Component({
  	selector: 'app-login',
  	templateUrl: './login.component.html',
  	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm : FormGroup;
	loginType : string;
	showPassword : boolean = false;

	constructor(private router: Router,
	private loader: LoaderService,
	private loginService: LoginService) { 
		this.loginForm = new FormGroup({
			'email' : new FormControl("", []),
			'password' : new FormControl("", [Validators.minLength(6)])
		});
	};

	validateLoginForm(formName) {
		return this.loginForm.get(formName); 
	};

	ngOnInit() {
		this.loginType = this.getLoginType();
		this.loginForm.controls['email'].setValidators([]);
		if(this.loginType !== 'student') {
			this.loginForm.controls['email'].setValidators([Validators.email]);
		}
	};

	getLoginType() {
		switch(this.router.url) {
			case '/school/login' : return 'school';
			case '/' : return 'student';
			default : return 'student';
		}
	};

	togglePassword() {
		this.showPassword = !this.showPassword;
	};
	  
	doLogin() {
		let data = this.loginForm.value;
		if(this.loginType === 'student') { data['type'] = 2;}
		this.loader.showLoader();
		this.loginService.doLogin(this.loginForm.value)
		.subscribe(() => {
			this.getUserDetails();
		}, () => {
			this.loader.hideLoader();
		});
	};

	getUserDetails() {
		this.loginService.getUserDetails()
		.subscribe((response:any) => {
			this.loader.hideLoader();
			this.navigateToDashboard(response.type)
		}, () => {
			this.loader.hideLoader();
		});
	};

	navigateToDashboard(typeOfUser) {
		switch(typeOfUser) {
			case 1:	this.router.navigate(['/superAdmin/dashboard']);
				break;
			case 2:	this.router.navigate(['/student/home']);
				break;
			case 3:	this.router.navigate(['/admin/dashboard']);
				break;
			case 4:	this.router.navigate(['/faculty/dashboard']);
				break;
			default:this.router.navigate(['/superAdmin/dashboard']);
		}
	};
}
