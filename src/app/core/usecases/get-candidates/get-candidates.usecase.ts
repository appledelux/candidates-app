import { Injectable } from '@angular/core';
import { map, Observable, switchMap, toArray } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { ICandidate } from '../../entities/candidate.interface';
import { CandidateMapper } from '../../mapper/candidate.mapper';
import { CandidateRepository } from '../../repositories/candidates/candidates.repository';

@Injectable()
export class GetCandidatesUseCase implements UseCase<void, ICandidate[]> {
  constructor(
    private readonly candidatesRepository: CandidateRepository,
    private readonly getCandidatesMapper: CandidateMapper
  ) {}

  execute(): Observable<ICandidate[]> {
    return this.candidatesRepository.getCandidates().pipe(
      switchMap((candidates) => candidates),
      map((candidate) => this.getCandidatesMapper.mapFrom(candidate)),
      toArray()
    );
  }
}
