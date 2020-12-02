import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubjectFacultyComponent } from './subject-faculty.component';

describe('AdminSubjectFacultyComponent', () => {
  let component: AdminSubjectFacultyComponent;
  let fixture: ComponentFixture<AdminSubjectFacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSubjectFacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSubjectFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
