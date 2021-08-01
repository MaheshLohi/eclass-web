import { TestBed } from '@angular/core/testing';

import { StudentWishlistService } from './wishlist.service';

describe('StudentWishlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentWishlistService = TestBed.get(StudentWishlistService);
    expect(service).toBeTruthy();
  });
});
