import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminListErrorComponent } from './list-error.component';

describe('SuperAdminListErrorComponent', () => {
  let component: SuperAdminListErrorComponent;
  let fixture: ComponentFixture<SuperAdminListErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAdminListErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminListErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
