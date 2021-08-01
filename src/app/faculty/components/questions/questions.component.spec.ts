import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyQuestionsComponent } from './questions.component';

describe('FacultyQuestionsComponent', () => {
  let component: FacultyQuestionsComponent;
  let fixture: ComponentFixture<FacultyQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
