import { TestBed } from '@angular/core/testing';

import { StudentFaqService } from './faq.service';

describe('StudentFaqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentFaqService = TestBed.get(StudentFaqService);
    expect(service).toBeTruthy();
  });
});
