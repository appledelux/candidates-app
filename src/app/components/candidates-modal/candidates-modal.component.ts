import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CandidateDetailsComponent } from '../candidate-details/candidate-details.component';

@Component({
  standalone: true,
  selector: 'app-candidates-modal',
  imports: [MatDialogModule, CandidateDetailsComponent],
  templateUrl: './candidates-modal.component.html',
  styleUrls: ['./candidates-modal.component.scss'],
})
export class CandidatesModalComponent {
  matDialogData = inject(MAT_DIALOG_DATA);
  data = this.matDialogData.candidate;
}
