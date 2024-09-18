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
    uuid,
    name,
    surname,
    years,
    seniority,
    availability,
  }: CandidateDTO): ICandidate {
    return {
      id: uuid,
      name,
      surname,
      yearsExperience: Number(years),
      seniority: Seniority[seniority as keyof typeof Seniority],
      availability: Boolean(availability),
    };
  }

  mapTo({
    id,
    name,
    surname,
    yearsExperience,
    seniority,
    availability,
  }: ICandidate): CandidateDTO {
    return {
      uuid: id,
      name,
      surname,
      years: yearsExperience.toString(),
      seniority,
      availability: String(availability),
    };
  }
}
