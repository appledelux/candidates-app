import { TestBed } from '@angular/core/testing';
import { CandidateRepository } from '../../repositories/candidates/candidates.repository';
import { GetCandidatesUseCase } from './get-candidates.usecase';

describe('GetCandidatesUseCase', () => {
  let useCase: GetCandidatesUseCase;
  let repository: jasmine.SpyObj<CandidateRepository>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CandidateRepository,
          useValue: jasmine.createSpyObj<CandidateRepository>([
            'getCandidates',
          ]),
          GetCandidatesUseCase,
        },
      ],
    });
    useCase = TestBed.inject(GetCandidatesUseCase);
    repository = TestBed.inject(
      CandidateRepository
    ) as jasmine.SpyObj<CandidateRepository>;
  });

  it('should be created', () => {
    expect(useCase).toBeTruthy();
  });

  it('should return a list of candidates', () => {});
});
