import { TestBed } from '@angular/core/testing';

import { NaukariService } from './naukari.service';

describe('NaukariService', () => {
  let service: NaukariService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaukariService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
