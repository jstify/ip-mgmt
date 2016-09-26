import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';

import {ApiService} from './services/api.service.ts'
import {RestService} from './services/rest.service.ts'

@Component({
  	selector: 'my-app',
  	template: '<router-outlet></router-outlet>',
  	directives: [ROUTER_DIRECTIVES],
  	providers: [
		  ROUTER_PROVIDERS,
		  ApiService,
		  RestService
	]
})

@RouteConfig([
	{ path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true },
  	{ path: '/details', name: 'Details', component: DetailsComponent }
])

export class AppComponent {
	
}