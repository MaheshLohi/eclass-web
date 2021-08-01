import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRecentVideosComponent } from './recent-videos.component';

describe('StudentRecentVideosComponent', () => {
  let component: StudentRecentVideosComponent;
  let fixture: ComponentFixture<StudentRecentVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRecentVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRecentVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
