import { TestBed } from '@angular/core/testing';

import { AdminFacultiesService } from './faculties.service';

describe('AdminFacultiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminFacultiesService = TestBed.get(AdminFacultiesService);
    expect(service).toBeTruthy();
  });
});
