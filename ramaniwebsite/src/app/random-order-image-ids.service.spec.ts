import { TestBed } from '@angular/core/testing';

import { RandomOrderImageIdsService } from './random-order-image-ids.service';

describe('RandomOrderImageIdsService', () => {
  let service: RandomOrderImageIdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomOrderImageIdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
