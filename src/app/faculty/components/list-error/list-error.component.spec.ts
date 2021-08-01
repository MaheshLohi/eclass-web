import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyListErrorComponent } from './list-error.component';

describe('FacultyListErrorComponent', () => {
  let component: FacultyListErrorComponent;
  let fixture: ComponentFixture<FacultyListErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyListErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyListErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
