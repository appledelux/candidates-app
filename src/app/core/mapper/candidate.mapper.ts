import { Injectable } from '@angular/core';
import { Mapper } from 'src/app/core/base/mapper';
import {
  CandidateDTO,
  ICandidate,
  Seniority,
} from 'src/app/core/entities/candidate.interface';

@Injectable({
  providedIn: 'root',
})
export class CandidateMapper implements Mapper<CandidateDTO, ICandidate> {
  mapFrom({
    _id,
    name,
    surname,
    years,
    seniority,
    availability,
  }: CandidateDTO): ICandidate {
    return {
      id: _id,
      name,
      surname,
      yearsExperience: Number(years),
      seniority: Seniority[seniority as keyof typeof Seniority],
      availability,
    };
  }

  mapTo(param: ICandidate): CandidateDTO {
    throw new Error('Method not implemented.');
  }
}
