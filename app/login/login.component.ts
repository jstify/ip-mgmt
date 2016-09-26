import { Component, OnInit  } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { LoginService } from './login.service';

@Component({
 	selector: 'my-login',
 	templateUrl: 'app/login/login.component.html',
 	providers: [LoginService]
})

export class LoginComponent {
private username = "sai";
private password = "saipwd";
validationStatus: string;
public loginDetails = {};
public login_error:Boolean = false;
private errorMessage: string;

constructor(private _router: Router, private loginService: LoginService) {
	this._router = _router;
	this.loginService = loginService;
}
	getLoginData() { 
		var loginData = {
			"username": this.username,
			"password": this.password
		};
		this.loginService.getLoginData(loginData)
			.subscribe(
				data => {
					if(data["status"] === "success") {
						let route = ['Details']
	       		        this._router.navigate(route);
					} else {
						alert("please provide valid username and password");
					}
				}
			);

	}

	login(event) {
		event.preventDefault();
		if(!this.username || !this.password) {
			alert("Please provide login credentials");
		} else {
			this.getLoginData();
		}
	}
}