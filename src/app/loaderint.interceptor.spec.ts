import { TestBed } from '@angular/core/testing';

import { LoaderintInterceptor } from './loaderint.interceptor';

describe('LoaderintInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoaderintInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoaderintInterceptor = TestBed.inject(LoaderintInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
