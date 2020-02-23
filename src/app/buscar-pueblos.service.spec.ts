import { TestBed } from '@angular/core/testing';

import { BuscarPueblosService } from './buscar-pueblos.service';

describe('BuscarPueblosService', () => {
  let service: BuscarPueblosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarPueblosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
