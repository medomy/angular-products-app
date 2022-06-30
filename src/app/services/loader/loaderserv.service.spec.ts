import { TestBed } from '@angular/core/testing';

import { LoaderservService } from './loaderserv.service';

describe('LoaderservService', () => {
  let service: LoaderservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
