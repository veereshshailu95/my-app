import { TestBed } from '@angular/core/testing';

import { AllpracticeService } from './allpractice.service';

describe('AllpracticeService', () => {
  let service: AllpracticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllpracticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
