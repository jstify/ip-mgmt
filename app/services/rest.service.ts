import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {ApiService} from './api.service.ts';

@Injectable()
export class RestService {
   constructor(private _http: Http, private _api: ApiService) {
       
   }

   get(apiName) {
       return this._http.get(this._api.getUrl(apiName)).map((res:Response) => res.json());
   }
   post(apiName, params) {
       let body = JSON.stringify(params);
       let headers = new Headers({ 'Content-Type': 'application/json' });
       let options = new RequestOptions({ headers: headers });
       return this._http.post(this._api.getUrl(apiName), body, options)
                       .map((res:Response) => res.json() || {})
                       .catch((error: any) => (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error');
   }
}