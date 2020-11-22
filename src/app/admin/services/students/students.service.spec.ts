import { TestBed } from '@angular/core/testing';

import { AdminStudentsService } from './students.service';

describe('AdminStudentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminStudentsService = TestBed.get(AdminStudentsService);
    expect(service).toBeTruthy();
  });
});
