import { TestBed } from '@angular/core/testing';

import { StudentHomeService } from './home.service';

describe('StudentHomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentHomeService = TestBed.get(StudentHomeService);
    expect(service).toBeTruthy();
  });
});
