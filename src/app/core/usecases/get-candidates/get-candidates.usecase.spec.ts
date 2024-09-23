import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import {
  CandidateDTO,
  ICandidate,
  Seniority,
} from '../../entities/candidate.interface';
import { CandidateMapper } from '../../mapper/candidate.mapper';
import { CandidateRepository } from '../../repositories/candidates/candidates.repository';
import { GetCandidatesUseCase } from './get-candidates.usecase';

const CANDIDATES_MOCK: CandidateDTO[] = [
  {
    _id: '1',
    name: 'Name 1',
    surname: 'Surname 1',
    seniority: 'junior',
    years: '1',
    availability: true,
  },
];

const CANDIDATES_MAPPED_MOCK: ICandidate[] = [
  {
    id: '1',
    name: 'Name 1',
    surname: 'Surname 1',
    seniority: Seniority['junior'],
    yearsExperience: 1,
    availability: true,
  },
];

describe('GetCandidatesUseCase', () => {
  let useCase: GetCandidatesUseCase;
  let candidateRepository: jasmine.SpyObj<CandidateRepository>;
  let candidateMapper: jasmine.SpyObj<CandidateMapper>;

  beforeEach(() => {
    const candidateRepositorySpy = jasmine.createSpyObj('CandidateRepository', [
      'getCandidates',
    ]);
    const candidateMapperSpy = jasmine.createSpyObj('CandidateMapper', [
      'mapFrom',
    ]);

    TestBed.configureTestingModule({
      providers: [
        GetCandidatesUseCase,
        {
          provide: CandidateMapper,
          useValue: candidateMapperSpy,
        },
        {
          provide: CandidateRepository,
          useValue: candidateRepositorySpy,
        },
      ],
    });
    useCase = TestBed.inject(GetCandidatesUseCase);
    candidateMapper = TestBed.inject(
      CandidateMapper
    ) as jasmine.SpyObj<CandidateMapper>;
    candidateRepository = TestBed.inject(
      CandidateRepository
    ) as jasmine.SpyObj<CandidateRepository>;
  });

  it('should be created', () => {
    expect(useCase).toBeTruthy();
  });

  it('should return a list of candidates', (done) => {
    candidateRepository.getCandidates.and.returnValue(of(CANDIDATES_MOCK));
    candidateMapper.mapFrom.and.returnValue(CANDIDATES_MAPPED_MOCK[0]);
    useCase.execute().subscribe((candidates) => {
      expect(candidates).toEqual(CANDIDATES_MAPPED_MOCK);
      expect(candidateMapper.mapFrom).toHaveBeenCalled();

      done();
    });
  });
});
