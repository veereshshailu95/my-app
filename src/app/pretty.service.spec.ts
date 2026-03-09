import { TestBed } from '@angular/core/testing';

import { PrettyService } from './pretty.service';

describe('PrettyService', () => {
  let service: PrettyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrettyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
