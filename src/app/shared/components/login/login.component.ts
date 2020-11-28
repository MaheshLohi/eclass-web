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

	loginForm : any;
	loginType : number;

	constructor(private router: Router,
	private loader: LoaderService,
	private loginService: LoginService) { 
		this.loginForm = new FormGroup({
			'email' : new FormControl("", []),
			'password' : new FormControl("", [
				Validators.minLength(6),
				Validators.required
			])
		});
	};

	ngOnInit() {
		this.loginType = this.getLoginType();
		if(this.loginType === 2) {
			this.loginForm.controls['email'].setValidators([Validators.required]);
		}
		else {
			this.loginForm.controls['email'].setValidators([Validators.required, Validators.email]);
		}
	};

	getLoginType() {
		switch(this.router.url) {
			case '/superAdmin/login' : return 1;
			case '/' : return 2;
			case '/admin/login' : return 3;
			case '/faculty/login' : return 4;
			default : return 2;
		}
	}

	get email() { 
		return this.loginForm.get('email'); 
	};

	get password() { 
		return this.loginForm.get('password'); 
	};
	  
	doLogin() {
		let data = this.loginForm.value;
		if(this.loginType === 2) {
			data['type'] = 2;
		}
		this.loader.showLoader();
		this.loginService.doLogin(this.loginForm.value)
		.then(() => {
			this.getUserDetails();
		}, () => {
			this.loader.hideLoader();
		});
	};

	getUserDetails() {
		this.loginService.getUserDetails()
		.then((response:any) => {
			this.loader.hideLoader();
			this.navigateToDashboard(response.type)
		}, () => {
			this.loader.hideLoader();
		});
	};

	navigateToDashboard(typeOfUser) {
		switch(typeOfUser) {
			case 1:
				this.router.navigate(['/superAdmin/dashboard']);
				  break;
			case 2:
				this.router.navigate(['/student/home']);
				break;
			case 3:
				this.router.navigate(['/admin/dashboard']);
				  break;
			case 4:
				this.router.navigate(['/faculty/dashboard']);
				  break;
			default:
				this.router.navigate(['/superAdmin/dashboard']);
		}
	};
}
