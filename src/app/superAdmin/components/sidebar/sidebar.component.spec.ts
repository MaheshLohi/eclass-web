import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminSidebarComponent } from './sidebar.component';

describe('SuperAdminSidebarComponent', () => {
	let component: SuperAdminSidebarComponent;
	let fixture: ComponentFixture<SuperAdminSidebarComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ SuperAdminSidebarComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SuperAdminSidebarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
