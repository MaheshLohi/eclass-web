import { TestBed } from '@angular/core/testing';

import { StudentChapterService } from './chapter.service';

describe('StudentChapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentChapterService = TestBed.get(StudentChapterService);
    expect(service).toBeTruthy();
  });
});
