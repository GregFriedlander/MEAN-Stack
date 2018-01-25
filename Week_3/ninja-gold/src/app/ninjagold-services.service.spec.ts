import { TestBed, inject } from '@angular/core/testing';

import { NinjagoldServicesService } from './ninjagold-services.service';

describe('NinjagoldServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NinjagoldServicesService]
    });
  });

  it('should be created', inject([NinjagoldServicesService], (service: NinjagoldServicesService) => {
    expect(service).toBeTruthy();
  }));
});
