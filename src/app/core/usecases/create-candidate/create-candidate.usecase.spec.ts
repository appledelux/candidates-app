import { TestBed } from '@angular/core/testing';
import { CandidateRepository } from '../../repositories/candidates/candidates.repository';
import { CreateCandidateUseCase } from './create-candidates.usecase';

describe('CreateCandidateUseCase', () => {
  let useCase: CreateCandidateUseCase;
  let repository: jasmine.SpyObj<CandidateRepository>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CandidateRepository,
          useValue: jasmine.createSpyObj<CandidateRepository>([
            'createCandidate',
          ]),
          CreateCandidateUseCase,
        },
      ],
    });
    useCase = TestBed.inject(CreateCandidateUseCase);
    repository = TestBed.inject(
      CandidateRepository
    ) as jasmine.SpyObj<CandidateRepository>;
  });

  it('should be created', () => {
    expect(useCase).toBeTruthy();
  });

  it('should return a list of candidates', () => {});
});
