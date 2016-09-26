import { Component, ViewContainerRef, ViewEncapsulation, ViewChild} from '@angular/core';
import {Http, Response} from '@angular/http';

import { detailsService } from './details.service';
import { modalComponentDirective } from '../directives/modal.directive';

@Component({
  	selector: 'my-details',
  	templateUrl: 'app/details/details.component.html',
  	providers: [detailsService, modalComponentDirective],
  	directives: [modalComponentDirective]
})

export class DetailsComponent {
	public details_error:boolean = false;
	private ipDetails = [];
	private newWebsite = {};
	private url: URL;

	constructor(private detailsService: detailsService, private http: Http, private vcRef: ViewContainerRef, 
				private modalDirective: modalComponentDirective) {
	}

	ngOnInit() {
		this.getDetails();
	}
	
	getDetails() {
	    this.detailsService.getIpDetails().subscribe(
			data => {
	      		this.ipDetails = data;
			},
	      	err => {
	      		this.details_error = true
      		}
	    );
	}
	
	deleteRow(index) {
		this.ipDetails.splice(index, 1);
		
		//http call for deleting new website
		
		 /* let body = JSON.stringify({ this.newWebsite });
    	 let headers = new Headers({ 'Content-Type': 'application/json' });
    	 let options = new RequestOptions({ headers: headers });
		
		 this.http.post(this.url, body, options)
                    .map(this.extractData)
                    .catch(this.handleError); */
	}
	
	addWebsite(){
		this.modalDirective.openPopup();
		
		/* this.newWebsite = {
			websitename: "Attack on ACK",
			subtitle: "ACK",
			url: "attack.ack.com",
			ipaddress: "183.82.1.242",
			description: "Lorem ipsum dolor sit amet, nam an porro causae fierent, sed id suavitate mnesarchum intellegam",
			accessmembers:[{
				username: "manasa",
				password: "manasa"
			}]
		};
		this.ipDetails.push(this.newWebsite); */
				
		//http call for adding new website
		
		 /* let body = JSON.stringify({ this.newWebsite });
    	 let headers = new Headers({ 'Content-Type': 'application/json' });
    	 let options = new RequestOptions({ headers: headers });
		
		 this.http.post(this.url, body, options)
                    .map(this.extractData)
                    .catch(this.handleError); */
	}
	/* private extractData(res: Response) {
		let body = res.json();
		return body.data || { };
	} */
	
}