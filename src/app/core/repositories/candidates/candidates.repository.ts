import { Observable } from 'rxjs';
import { CandidateDTO } from '../../entities/candidate.interface';

export abstract class CandidateRepository {
  abstract getCandidates(): Observable<CandidateDTO[]>;
  abstract createCandidate(candidate: CandidateDTO): Observable<void>;
}
