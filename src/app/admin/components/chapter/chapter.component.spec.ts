import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChapterComponent } from './chapter.component';

describe('AdminChapterComponent', () => {
  let component: AdminChapterComponent;
  let fixture: ComponentFixture<AdminChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
