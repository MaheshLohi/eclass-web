import { TestBed } from '@angular/core/testing';

import { SuperAdminInstitutesService } from './institutes.service';

describe('SuperAdminInstitutesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuperAdminInstitutesService = TestBed.get(SuperAdminInstitutesService);
    expect(service).toBeTruthy();
  });
});
