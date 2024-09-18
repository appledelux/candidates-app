import { Observable } from 'rxjs';
import { ICandidate } from 'src/app/core/entities/candidate.interface';
import { CandidateRepository } from 'src/app/core/repositories/candidates/candidates.repository';

export class CandidatesImplRepository extends CandidateRepository {
  url = '/api/candidates-api';

  override getCandidates(): Observable<ICandidate[]> {
    throw new Error('Method not implemented.');
  }
  override createCandidate(candidate: ICandidate): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
