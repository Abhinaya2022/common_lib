import { TestBed } from '@angular/core/testing';

import { CommonSwalService } from './common-swal.service';

describe('CommonSwalService', () => {
  let service: CommonSwalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonSwalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
