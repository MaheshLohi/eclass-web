import { TestBed } from '@angular/core/testing';

import { StudentExaminationService } from './examination.service';

describe('StudentExaminationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentExaminationService = TestBed.get(StudentExaminationService);
    expect(service).toBeTruthy();
  });
});
