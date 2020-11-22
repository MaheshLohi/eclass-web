import { TestBed } from '@angular/core/testing';

import { SuperAdminAdminsService } from './admins.service';

describe('AdminsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuperAdminAdminsService = TestBed.get(SuperAdminAdminsService);
    expect(service).toBeTruthy();
  });
});
