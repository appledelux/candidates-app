import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateDTO } from 'src/app/core/entities/candidate.interface';
import { CandidateRepository } from 'src/app/core/repositories/candidates/candidates.repository';

@Injectable()
export class CandidatesImplRepository extends CandidateRepository {
  url = 'http://127.0.0.1:3000/api/candidates';

  constructor(private http: HttpClient) {
    super();
  }

  override getCandidates(): Observable<CandidateDTO[]> {
    return this.http.get<CandidateDTO[]>(this.url);
  }
}
