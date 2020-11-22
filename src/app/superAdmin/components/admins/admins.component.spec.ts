import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminAdminsComponent } from './admins.component';

describe('AdminsComponent', () => {
  let component: SuperAdminAdminsComponent;
  let fixture: ComponentFixture<SuperAdminAdminsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAdminAdminsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
