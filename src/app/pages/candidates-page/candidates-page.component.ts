import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidatesModalComponent } from 'src/app/components/candidates-modal/candidates-modal.component';
import { CandidatesTableComponent } from 'src/app/components/candidates-table/candidates-table.component';
import { ICandidate } from 'src/app/core/entities/candidate.interface';
import { GetCandidatesUseCase } from 'src/app/core/usecases/get-candidates/get-candidates.usecase';
import { CandidatesFacadeService } from './candidates-facade/candidates-facade.service';

@Component({
  standalone: true,
  selector: 'app-candidates-page',
  imports: [CommonModule, CandidatesModalComponent, CandidatesTableComponent],
  providers: [CandidatesFacadeService, GetCandidatesUseCase],
  templateUrl: './candidates-page.component.html',
  styleUrls: ['./candidates-page.component.scss'],
})
export class CandidatesPageComponent implements OnInit {
  private candidatesFacade = inject(CandidatesFacadeService);
  candidates$: Observable<ICandidate[]> = this.candidatesFacade.getCandidates();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
