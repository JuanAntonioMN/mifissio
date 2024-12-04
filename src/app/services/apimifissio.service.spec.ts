import { TestBed } from '@angular/core/testing';

import { ApimifissioService } from './apimifissio.service';

describe('ApimifissioService', () => {
  let service: ApimifissioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApimifissioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
