import { Observable } from 'rxjs';
import { UseCase } from '../../entities/base';
import { ICandidate } from '../../entities/candidate.interface';
import { CandidateRepository } from '../../repositories/candidates/candidates.repository';

export class GetCandidatesUseCase implements UseCase<void, ICandidate[]> {
  constructor(private readonly candidatesRepository: CandidateRepository) {}

  execute(): Observable<ICandidate[]> {
    return this.candidatesRepository.getCandidates();
  }
}
