import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  standalone: true,
  selector: 'app-candidate-details',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatSelectModule,
  ],
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss'],
})
export class CandidateDetailsComponent {
  readonly candidateFG = new FormGroup({});
}
