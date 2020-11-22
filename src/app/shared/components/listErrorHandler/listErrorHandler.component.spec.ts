import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListErrorHandlerComponent } from './listErrorHandler.component';

describe('ListErrorHandlerComponent', () => {
	let component: ListErrorHandlerComponent;
	let fixture: ComponentFixture<ListErrorHandlerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ListErrorHandlerComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ListErrorHandlerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
