import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CandidateDetailsComponent } from '../candidate-details/candidate-details.component';

@Component({
  standalone: true,
  selector: 'app-candidates-modal',
  imports: [MatDialogModule, CandidateDetailsComponent],
  templateUrl: './candidates-modal.component.html',
  styleUrls: ['./candidates-modal.component.scss'],
})
export class CandidatesModalComponent {}
