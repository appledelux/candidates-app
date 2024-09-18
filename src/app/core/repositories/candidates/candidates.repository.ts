import { Observable } from 'rxjs';
import { ICandidate } from '../../entities/candidate.interface';

export abstract class CandidateRepository {
  abstract getCandidates(): Observable<ICandidate[]>;
  abstract createCandidate(candidate: ICandidate): Observable<void>;
}
