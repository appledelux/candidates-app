import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICandidate } from 'src/app/core/entities/candidate.interface';
import { GetCandidatesUseCase } from 'src/app/core/usecases/get-candidates/get-candidates.usecase';

@Injectable()
export class CandidatesFacadeService {
  getCandidatesUseCase = inject(GetCandidatesUseCase);

  getCandidates(): Observable<ICandidate[]> {
    return this.getCandidatesUseCase.execute();
  }
}
