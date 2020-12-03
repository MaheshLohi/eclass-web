import { TestBed } from '@angular/core/testing';

import { StudentDownloadsService } from './downloads.service';

describe('StudentDownloadsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentDownloadsService = TestBed.get(StudentDownloadsService);
    expect(service).toBeTruthy();
  });
});
