import { Directive, Input, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Directive({
  	selector: '[modalComponent]',
	properties : ['data: data-items'],
	exportAs: 'modalDirective'
})
export class modalComponentDirective {

	constructor(private modal: Modal, vcRef: ViewContainerRef) {
		modal.defaultViewContainer = vcRef;
	}
	
	openPopup() {
		this.modal.alert()
			.size('lg')
			.showClose(true)
			.title('A simple Alert style modal window')
			.body(`
			    <h4>Alert is a classic (title/body/footer) 1 button modal window that 
			    does not block.</h4>
			    <b>Configuration:</b>
			    <ul>
			        <li>Non blocking (click anywhere outside to dismiss)</li>
			        <li>Size large</li>
			        <li>Dismissed with default keyboard key (ESC)</li>
			        <li>Close wth button click</li>
			        <li>HTML content</li>
			    </ul>`)
			.open();
	}
}

