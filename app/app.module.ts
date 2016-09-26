import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,
  				  FormsModule,
  				  ModalModule.forRoot(),
    			  BootstrapModalModule],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent],
  providers:    [ HTTP_PROVIDERS ]
})

export class AppModule {}