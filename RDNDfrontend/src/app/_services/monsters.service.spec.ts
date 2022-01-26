import { TestBed } from '@angular/core/testing';

import { MonstersService } from './monsters.service';

describe('MonstersService', () => {
  let service: MonstersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonstersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
