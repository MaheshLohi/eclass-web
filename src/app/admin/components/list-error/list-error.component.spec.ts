import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListErrorComponent } from './list-error.component';

describe('AdminListErrorComponent', () => {
  let component: AdminListErrorComponent;
  let fixture: ComponentFixture<AdminListErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
