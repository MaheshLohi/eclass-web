import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminInstitutesComponent } from './institutes.component';

describe('SuperAdminInstitutesComponent', () => {
  let component: SuperAdminInstitutesComponent;
  let fixture: ComponentFixture<SuperAdminInstitutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAdminInstitutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminInstitutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
