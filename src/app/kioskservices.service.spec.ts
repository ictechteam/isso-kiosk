import { TestBed, inject } from '@angular/core/testing';

import { KioskservicesService } from './kioskservices.service';

describe('KioskservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KioskservicesService]
    });
  });

  it('should be created', inject([KioskservicesService], (service: KioskservicesService) => {
    expect(service).toBeTruthy();
  }));
});
