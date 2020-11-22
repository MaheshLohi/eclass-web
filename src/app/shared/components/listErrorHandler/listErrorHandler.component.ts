import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  	selector: 'app-list-error-handler',
  	templateUrl: './listErrorHandler.component.html',
  	styleUrls: ['./listErrorHandler.component.scss']
})
export class ListErrorHandlerComponent implements OnChanges {
	@Input() title: string;
	@Input() status: number;
	@Input() enableNavigation? : boolean = false;
	@Input() navigationLink? : string;

	constructor(private translate: TranslateService){ };

	ngOnChanges(changes: SimpleChanges) {
		for (let propName in changes) { 
			let change = changes[propName];
			this[propName] = change.currentValue;
			if(propName === 'title') {
				this.title = this.translate.instant(this[propName]).toLowerCase();
			}
		}
	};
}
