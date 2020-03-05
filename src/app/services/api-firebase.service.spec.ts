import { TestBed } from '@angular/core/testing';

import { ApiFirebaseService } from './api-firebase.service';

describe('ApiFirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiFirebaseService = TestBed.get(ApiFirebaseService);
    expect(service).toBeTruthy();
  });
});
