import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
//import {Response} from '@angular/http';
import {RestService} from './../services/rest.service.ts';


@Injectable()
export class LoginService {
	constructor(private _rest: RestService) {
  	}
	getLoginData(data){
		return this._rest.post('doLogin', data)
						.map(data => data);
	}
}