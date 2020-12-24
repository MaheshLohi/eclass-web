import { TestBed } from '@angular/core/testing';

import { StudentRecentVideosService } from './recent-videos.service';

describe('StudentRecentVideosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentRecentVideosService = TestBed.get(StudentRecentVideosService);
    expect(service).toBeTruthy();
  });
});
