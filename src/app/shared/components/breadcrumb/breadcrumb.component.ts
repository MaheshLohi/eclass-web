import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  	selector: 'app-breadcrumb',
 	templateUrl: './breadcrumb.component.html',
  	styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnChanges{

	@Input() title: string;
	@Input() showButton = false;
	@Input() buttonText: string;
	@Input() addFeatureEnabled = false;
	@Output() buttonClickedEvent = new EventEmitter();

	triggerButtonClickEvent() {
		this.buttonClickedEvent.emit();
	};

	ngOnChanges(changes: SimpleChanges) {
		for (let propName in changes) { 
			let change = changes[propName];
			this[propName] = change.currentValue;
		}
	};
}
