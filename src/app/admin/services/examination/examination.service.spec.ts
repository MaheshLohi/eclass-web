import { TestBed } from '@angular/core/testing';

import { AdminExaminationService } from './examination.service';

describe('AdminExaminationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminExaminationService = TestBed.get(AdminExaminationService);
    expect(service).toBeTruthy();
  });
});
