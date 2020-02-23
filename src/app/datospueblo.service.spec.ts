import { TestBed } from '@angular/core/testing';

import { DatospuebloService } from './datospueblo.service';

describe('DatospuebloService', () => {
  let service: DatospuebloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatospuebloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
