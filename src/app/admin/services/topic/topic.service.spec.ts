import { TestBed } from '@angular/core/testing';

import { AdminTopicService } from './topic.service';

describe('AdminTopicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminTopicService = TestBed.get(AdminTopicService);
    expect(service).toBeTruthy();
  });
});
