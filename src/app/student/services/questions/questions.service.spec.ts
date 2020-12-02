import { TestBed } from '@angular/core/testing';

import { StudentQuestionsService } from './questions.service';

describe('StudentQuestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentQuestionsService = TestBed.get(StudentQuestionsService);
    expect(service).toBeTruthy();
  });
});
