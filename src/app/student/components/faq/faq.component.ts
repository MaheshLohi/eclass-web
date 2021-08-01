import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

import { LoaderService } from '@sharedServices/loader/loader.service';
import { StudentFaqService } from '@studentServices/faq/faq.service';

@Component({
  	selector: 'app-student-faq',
  	templateUrl: './faq.component.html',
  	styleUrls: ['./faq.component.scss']
})
export class StudentFaqComponent implements OnChanges {

	@Input() topicId: number;
	faqsDataStatus : number = 2;
	faqs : any = [];

	constructor(private _loader: LoaderService,
	private _faq : StudentFaqService) { };

	ngOnChanges(changes: SimpleChanges) {
		for (let propName in changes) { 
			let change = changes[propName];
			this[propName] = change.currentValue;
		}
		this.getFaqsList();
	};

	resetQuestionsList() {
		this.faqsDataStatus = 2;
		this.faqs = [];
		this._loader.showLoader();
	};

	getFaqsList() {
		this.resetQuestionsList();
		this._faq.getFaqsList(this.topicId)
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.faqsDataStatus = 1;
			this.faqs = response.reverse();
		}, () => {
			this._loader.hideLoader();
			this.faqsDataStatus = 0;
		});
	};
}
