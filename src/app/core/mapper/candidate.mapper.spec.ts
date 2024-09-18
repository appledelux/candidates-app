import { TestBed } from '@angular/core/testing';

import { CandidateMapper } from './candidate.mapper';

describe('CandidateMappers', () => {
  let service: CandidateMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateMapper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#mapFrom', () => {
    it('should return an object of the type ICandidate', () => {});
  });

  describe('#mapTo', () => {
    it('should return an object of the type CandidateDTO', () => {});
  });
});
