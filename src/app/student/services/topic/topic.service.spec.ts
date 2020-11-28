import { TestBed } from '@angular/core/testing';

import { StudentTopicService } from './topic.service';

describe('StudentTopicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentTopicService = TestBed.get(StudentTopicService);
    expect(service).toBeTruthy();
  });
});
