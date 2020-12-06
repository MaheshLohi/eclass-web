import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { StudentFaqService } from '@studentServices/faq/faq.service';

@Component({
  	selector: 'app-student-faq',
  	templateUrl: './faq.component.html',
  	styleUrls: ['./faq.component.scss']
})
export class StudentFaqComponent implements OnChanges {

	@Input() topicId: any;
	faqsDataStatus : number = 2;
	faqs : any = [];

	constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	public router: Router,
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
		.then((response:any) => {
			this.loader.hideLoader();
			this.faqsDataStatus = 1;
			this.faqs = response.reverse();
		}, () => {
			this.loader.hideLoader();
			this.faqsDataStatus = 0;
		});
	};
}
