import { TestBed } from '@angular/core/testing';

import { AdminDepartmentService } from './department.service';

describe('AdminDepartmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminDepartmentService = TestBed.get(AdminDepartmentService);
    expect(service).toBeTruthy();
  });
});
