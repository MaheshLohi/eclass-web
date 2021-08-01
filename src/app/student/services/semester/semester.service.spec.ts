import { TestBed } from '@angular/core/testing';

import { StudentSemesterService } from './semester.service';

describe('StudentSemesterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentSemesterService = TestBed.get(StudentSemesterService);
    expect(service).toBeTruthy();
  });
});
