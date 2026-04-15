import { TestBed } from '@angular/core/testing';

import { Extensions } from './extensions';

describe('Extensions', () => {
  let service: Extensions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Extensions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
