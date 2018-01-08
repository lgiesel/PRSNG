import { TestBed, inject } from '@angular/core/testing';

import { PrliService } from './prli.service';

describe('PrliService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrliService]
    });
  });

  it('should be created', inject([PrliService], (service: PrliService) => {
    expect(service).toBeTruthy();
  }));
});
