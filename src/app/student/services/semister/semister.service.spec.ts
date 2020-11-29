import { TestBed } from '@angular/core/testing';

import { StudentSemisterService } from './semister.service';

describe('StudentSemisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentSemisterService = TestBed.get(StudentSemisterService);
    expect(service).toBeTruthy();
  });
});
