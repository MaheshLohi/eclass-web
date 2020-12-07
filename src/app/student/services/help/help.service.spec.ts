import { TestBed } from '@angular/core/testing';

import { StudentHelpService } from './help.service';

describe('StudentHelpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentHelpService = TestBed.get(StudentHelpService);
    expect(service).toBeTruthy();
  });
});
