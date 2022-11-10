import { TestBed } from '@angular/core/testing';

import { ResaurantOrdersService } from './resaurant-orders.service';

describe('ResaurantOrdersService', () => {
  let service: ResaurantOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResaurantOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
