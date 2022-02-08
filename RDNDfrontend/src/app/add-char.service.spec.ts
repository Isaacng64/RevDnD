import { TestBed } from '@angular/core/testing';

import { AddCharService } from './add-char.service';

describe('AddCharService', () => {
  let service: AddCharService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCharService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
