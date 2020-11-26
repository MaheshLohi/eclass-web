import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  	selector: 'app-breadcrumb',
 	templateUrl: './breadcrumb.component.html',
  	styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnChanges{

	@Input() title: string;

	ngOnChanges(changes: SimpleChanges) {
		for (let propName in changes) { 
			let change = changes[propName];
			this[propName] = change.currentValue;
		}
	};
}
