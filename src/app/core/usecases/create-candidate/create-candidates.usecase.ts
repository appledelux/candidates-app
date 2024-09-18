import { Observable } from 'rxjs';
import { UseCase } from '../../entities/base';
import { ICandidate } from '../../entities/candidate.interface';
import { CandidateRepository } from '../../repositories/candidates/candidates.repository';

export class CreateCandidateUseCase implements UseCase<ICandidate, void> {
  constructor(private readonly candidatesRepository: CandidateRepository) {}

  execute(candidate: ICandidate): Observable<void> {
    return this.candidatesRepository.createCandidate(candidate);
  }
}
