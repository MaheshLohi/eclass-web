import { TestBed } from '@angular/core/testing';

import { FacultySubjectsService } from './subjects.service';

describe('FacultySubjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacultySubjectsService = TestBed.get(FacultySubjectsService);
    expect(service).toBeTruthy();
  });
});
