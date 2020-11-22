import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { LoaderService } from '@sharedServices/loader/loader.service';
import { LoginService } from '@sharedServices/login/login.service';

@Component({
  	selector: 'app-login',
  	templateUrl: './login.component.html',
  	styleUrls: ['./login.component.scss']
})
export class LoginComponent {

	loginForm: any;
	token: string;

	constructor(private router: Router,
	private loader: LoaderService,
	private loginService: LoginService) { 
		this.loginForm = new FormGroup({
			'email' : new FormControl("", [
				Validators.email,
				Validators.required
			]),
			'password' : new FormControl("", [
				Validators.minLength(6),
				Validators.required
			])
		});
	};

	get email() { 
		return this.loginForm.get('email'); 
	};

	get password() { 
		return this.loginForm.get('password'); 
	};
	  
	doLogin() {
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
		.then(() => {
			this.loader.hideLoader();
			if (this.router.url === "/superAdmin/login") {
				this.router.navigate(['/superAdmin/dashboard']);
			} else {
				this.router.navigate(['/admin/dashboard']);
			}
		}, () => {
			this.loader.hideLoader();
		});
	}
}
