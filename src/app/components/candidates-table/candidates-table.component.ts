import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() actionClick = new EventEmitter<ICandidate>();

  // Sort
  // @ViewChild(MatSort) set matSort(matSort: MatSort) {
  //   if (ms) {
  //     this.sort = matSort;
  //     this.setDataSourceAttributes();
  //   }
  // }

  // Paginator
  // @ViewChild(MatSort) set matPaginator(matPaginator: MatPaginator) {
  //   if (ms) {
  //     this.paginator = matPaginator;
  //     this.setDataSourceAttributes();
  //   }
  // }
  displayedColumns = [
    'name',
    'surname',
    'seniority',
    'experienceYears',
    'availability',
  ];

  showCandidate(candidate: ICandidate) {
    this.actionClick.emit(candidate);
  }
}
