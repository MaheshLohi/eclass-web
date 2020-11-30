import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExaminationComponent } from './examination.component';

describe('StudentExaminationComponent', () => {
  let component: StudentExaminationComponent;
  let fixture: ComponentFixture<StudentExaminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentExaminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
