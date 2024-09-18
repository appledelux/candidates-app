import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ICandidate } from 'src/app/core/entities/candidate.interface';

@Component({
  standalone: true,
  selector: 'app-candidates-table',
  imports: [CommonModule, MatTableModule],
  templateUrl: './candidates-table.component.html',
  styleUrls: ['./candidates-table.component.scss'],
})
export class CandidatesTableComponent {
  @Input() dataset: ICandidate[] = [];
  readonly rowClickedId = null;
  displayedSelectedColumns = [
    'name',
    'surname',
    'seniority',
    'experienceYears',
    'availability',
  ];

  constructor() {}

  showCandidate(candidate: ICandidate) {
    console.log('Opened Details', candidate);
  }
}
