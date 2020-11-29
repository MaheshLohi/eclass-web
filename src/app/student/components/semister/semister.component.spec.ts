import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSemisterComponent } from './semister.component';

describe('StudentSemisterComponent', () => {
  let component: StudentSemisterComponent;
  let fixture: ComponentFixture<StudentSemisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSemisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSemisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
