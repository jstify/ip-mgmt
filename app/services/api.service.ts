import {Injectable} from '@angular/core';

@Injectable()
export class ApiService {
    //Backend server url
	private serverBasePath = "http://localhost:3000/getDetails/";

	//Local url for jsons
	private localBasePath = "data/";

	//This value need to set as True if you want to work with local json
	offline = true;

	//Local paths for api names
	staticApiPaths = {
        "doLogin": "login.json",
        "getDetails": "ipDetails.json"
	} ;

	//Server paths for api names
	serverApiPaths = {
		"doLogin": "login",
		"getDetails": "data"
	};

    /**
	 * @name getUrl
	 * @param {String} apiName Name of the API
	 * @return {String} URL
	 * @description This function returns url(local json url or live server url) for given api based on the offline flag
	 */
	getUrl(apiName) {
		var url = "";

		if (this.offline || !this.serverApiPaths[apiName]) {
			//If you are wotking on offline or server API is not ready
			url = this.localBasePath + this.staticApiPaths[apiName]
		} else {
			//Building server path
			url = this.serverBasePath + this.serverApiPaths[apiName];
		}
		return url;
	};

}