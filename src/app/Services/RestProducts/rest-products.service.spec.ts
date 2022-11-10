import { TestBed } from '@angular/core/testing';

import { RestProductsService } from './rest-products.service';

describe('RestProductsService', () => {
  let service: RestProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
