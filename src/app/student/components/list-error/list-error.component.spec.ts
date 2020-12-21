import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListErrorComponent } from './list-error.component';

describe('StudentListErrorComponent', () => {
  let component: StudentListErrorComponent;
  let fixture: ComponentFixture<StudentListErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentListErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
