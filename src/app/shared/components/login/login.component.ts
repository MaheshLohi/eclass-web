import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { LoaderService } from '@sharedServices/loader/loader.service';
import { LoginService } from '@sharedServices/login/login.service';
import { ToasterService } from '@sharedServices/toaster/toaster.service';


@Component({
  	selector: 'app-login',
  	templateUrl: './login.component.html',
  	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm : FormGroup;
	loginType : string;
	showPassword : boolean = false;
	forgotPasswordForm : FormGroup;
	validateUsn  : boolean = false;
	adminForgotPasswordForm : FormGroup;

	constructor(private _router: Router,
	private _loader: LoaderService,
	private toaster: ToasterService,

	private _login: LoginService) { 
		this.loginForm = new FormGroup({
			'email' : new FormControl("", []),
			'password' : new FormControl("", [Validators.minLength(6)])
		});

		this.forgotPasswordForm = new FormGroup({
			'email' : new FormControl("", []),
			'usn' : new FormControl("", [])
			});

		this.adminForgotPasswordForm = new FormGroup({
			'email' : new FormControl("", [])
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
		switch(this._router.url) {
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
		this._loader.showLoader();
		this._login.doLogin(this.loginForm.value)
		.subscribe(() => {
			this.getUserDetails();
		}, () => {
			this._loader.hideLoader();
		});
	};

	getUserDetails() {
		this._login.getUserDetails()
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.navigateToDashboard(response.type)
		}, () => {
			this._loader.hideLoader();
		});
	};

	navigateToDashboard(typeOfUser) {
		switch(typeOfUser) {
			case 1:	this._router.navigate(['/superAdmin/dashboard']);
				break;
			case 2:	this._router.navigate(['/student/home']);
				break;
			case 3:	this._router.navigate(['/admin/dashboard']);
				break;
			case 4:	this._router.navigate(['/faculty/dashboard']);
				break;
			default:this._router.navigate(['/superAdmin/dashboard']);
		}
	};


	validateForgotPasswordFormValue(formName) {
		return this.forgotPasswordForm.get(formName); 
	};

	forgotPassword ()
	{
		let data = this.forgotPasswordForm.value;
		this._loader.showLoader();
		this._login.forgotPassword(data)
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.toaster.showSuccess(response.status.message);
		}, (errorCode) => {
			this._loader.hideLoader();
		});

	}

	validateAdminForgotPasswordFormValue(formName) {
		return this.adminForgotPasswordForm.get(formName); 
	};

	adminForgotPassword ()
	{
		let data = this.adminForgotPasswordForm.value;
		this._loader.showLoader();
		this._login.adminForgotPassword(data)
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.toaster.showSuccess(response.status.message);
		}, (errorCode) => {
			this._loader.hideLoader();
		});

	}
}
