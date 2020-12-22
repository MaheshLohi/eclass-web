import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

import { Constants } from '@app/constants';
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

	constructor(public constants : Constants,
	private loader: LoaderService,
	private studentFaqService : StudentFaqService) { };

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
		this.loader.showLoader();
	};

	getFaqsList() {
		this.resetQuestionsList();
		this.studentFaqService.getFaqsList(this.topicId)
		.subscribe((response:any) => {
			this.loader.hideLoader();
			this.faqsDataStatus = 1;
			this.faqs = response.reverse();
		}, () => {
			this.loader.hideLoader();
			this.faqsDataStatus = 0;
		});
	};
}
