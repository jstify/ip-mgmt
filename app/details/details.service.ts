import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {RestService} from './../services/rest.service.ts'

@Injectable()
export class detailsService {
	constructor(private _rest: RestService) {
  	}
	getIpDetails(){
		return this._rest.get('getDetails');
	}
}