import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CandidateDTO } from 'src/app/core/entities/candidate.interface';
import { CandidateRepository } from 'src/app/core/repositories/candidates/candidates.repository';
import data from 'src/assets/mocks/candidates_mock.json';

@Injectable()
export class CandidatesMockImplRepository extends CandidateRepository {
  constructor() {
    super();
  }

  override getCandidates(): Observable<CandidateDTO[]> {
    console.log('>> Get Candidates: ', data);
    return of(data);
  }
}
