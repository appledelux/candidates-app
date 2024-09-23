import { TestBed } from '@angular/core/testing';

import { Seniority } from '../entities/candidate.interface';
import { CandidateMapper } from './candidate.mapper';

describe('CandidateMappers', () => {
  let candidateMapper: CandidateMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidateMapper],
    });
    candidateMapper = TestBed.inject(CandidateMapper);
  });

  it('should be created', () => {
    expect(candidateMapper).toBeTruthy();
  });

  describe('#mapFrom', () => {
    it('should return an object of the type ICandidate', () => {
      const candidate_mock = {
        _id: '1',
        name: 'Name 1',
        surname: 'Surname 1',
        seniority: 'junior',
        years: '1',
        availability: true,
      };
      const candidate = {
        id: '1',
        name: 'Name 1',
        surname: 'Surname 1',
        seniority: Seniority['junior'],
        yearsExperience: 1,
        availability: true,
      };

      expect(candidateMapper.mapFrom(candidate_mock)).toEqual(candidate);
    });
  });
});
