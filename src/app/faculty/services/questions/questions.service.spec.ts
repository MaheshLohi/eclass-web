import { TestBed } from '@angular/core/testing';

import { FacultyQuestionsService } from './questions.service';

describe('FacultyQuestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacultyQuestionsService = TestBed.get(FacultyQuestionsService);
    expect(service).toBeTruthy();
  });
});
