import { TestBed } from '@angular/core/testing';

import { StudentFeedbackService } from './feedback.service';

describe('StudentFeedbackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentFeedbackService = TestBed.get(StudentFeedbackService);
    expect(service).toBeTruthy();
  });
});
