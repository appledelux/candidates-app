export interface CandidateDTO {
  _id: string;
  name: string;
  surname: string;
  seniority: string;
  years: string;
  availability: boolean;
}

export enum Seniority {
  junior = 'Junior',
  senior = 'Senior',
}

export interface ICandidate {
  id: string;
  name: string;
  surname: string;
  seniority: Seniority;
  yearsExperience: number;
  availability: boolean;
}
