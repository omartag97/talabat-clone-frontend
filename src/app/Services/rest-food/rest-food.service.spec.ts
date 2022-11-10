import { TestBed } from '@angular/core/testing';

import { RestFoodService } from '../../Services/rest-food/rest-food.service';

describe('RestFoodService', () => {
  let service: RestFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
