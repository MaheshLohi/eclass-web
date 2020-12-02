import { TestBed } from '@angular/core/testing';

import { SubjectFacultyService } from './subject-faculty.service';

describe('SubjectFacultyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubjectFacultyService = TestBed.get(SubjectFacultyService);
    expect(service).toBeTruthy();
  });
});
