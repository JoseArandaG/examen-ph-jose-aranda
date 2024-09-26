import { TestBed } from '@angular/core/testing';

import { AvisoBDService } from './aviso-bd.service';

describe('AvisoBDService', () => {
  let service: AvisoBDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvisoBDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
