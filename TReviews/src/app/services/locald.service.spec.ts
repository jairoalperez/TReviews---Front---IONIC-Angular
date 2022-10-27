import { TestBed } from '@angular/core/testing';

import { LocaldService } from './locald.service';

describe('LocaldService', () => {
  let service: LocaldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocaldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
