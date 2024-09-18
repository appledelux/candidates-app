import { TestBed } from '@angular/core/testing';

import { CandidatesFacadeService } from './candidates-facade.service';

describe('CandidatesFacadeService', () => {
  let service: CandidatesFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatesFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
