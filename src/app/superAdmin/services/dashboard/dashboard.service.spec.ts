import { TestBed } from '@angular/core/testing';

import { SuperAdminDashboardService } from './dashboard.service';

describe('SuperAdminDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuperAdminDashboardService = TestBed.get(SuperAdminDashboardService);
    expect(service).toBeTruthy();
  });
});
