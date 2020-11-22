import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFacultiesComponent } from './faculties.component';

describe('AdminFacultiesComponent', () => {
  let component: AdminFacultiesComponent;
  let fixture: ComponentFixture<AdminFacultiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFacultiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
