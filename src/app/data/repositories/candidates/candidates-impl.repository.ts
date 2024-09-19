import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateDTO } from 'src/app/core/entities/candidate.interface';
import { CandidateRepository } from 'src/app/core/repositories/candidates/candidates.repository';

@Injectable()
export class CandidatesImplRepository extends CandidateRepository {
  url = '/api/candidates-api';

  constructor() {
    super();
  }

  override getCandidates(): Observable<CandidateDTO[]> {
    throw new Error('Method not implemented.');
  }
}
