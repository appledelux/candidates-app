import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { ICandidate } from '../../entities/candidate.interface';
import { CandidateMapper } from '../../mapper/candidate.mapper';
import { CandidateRepository } from '../../repositories/candidates/candidates.repository';

export class CreateCandidateUseCase implements UseCase<ICandidate, void> {
  constructor(
    private readonly candidatesRepository: CandidateRepository,
    private readonly candidateMapper: CandidateMapper
  ) {}

  execute(candidate: ICandidate): Observable<void> {
    const _candidateDTO = this.candidateMapper.mapTo(candidate);
    return this.candidatesRepository.createCandidate(_candidateDTO);
  }
}
