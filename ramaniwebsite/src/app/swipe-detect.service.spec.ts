import { TestBed } from '@angular/core/testing';

import { SwipeDetectService } from './swipe-detect.service';

describe('SwipeDetectService', () => {
  let service: SwipeDetectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwipeDetectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
