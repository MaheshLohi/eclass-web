import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCreateProfileComponent } from './create-profile.component';

describe('StudentCreateProfileComponent', () => {
  let component: StudentCreateProfileComponent;
  let fixture: ComponentFixture<StudentCreateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCreateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCreateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
