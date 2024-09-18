import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ICandidate } from 'src/app/core/entities/candidate.interface';
@Component({
  standalone: true,
  selector: 'app-candidate-details',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
  ],
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss'],
})
export class CandidateDetailsComponent {
  @Input() set candidate(_candidate: ICandidate) {
    this.candidateFG.setValue(_candidate);
  }
  readonly options = ['Junior', 'Senior'];
  readonly candidateFG = new FormGroup({
    id: new FormControl<string>(''),
    name: new FormControl<string>(''),
    surname: new FormControl<string>(''),
    availability: new FormControl<boolean>(false),
    yearsExperience: new FormControl<number>(0),
    seniority: new FormControl<string>(''),
  });
}
