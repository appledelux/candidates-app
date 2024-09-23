import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { Observable, take } from 'rxjs';
import { CandidatesModalComponent } from 'src/app/components/candidates-modal/candidates-modal.component';
import { CandidatesTableComponent } from 'src/app/components/candidates-table/candidates-table.component';
import { ICandidate } from 'src/app/core/entities/candidate.interface';
import { CandidateRepository } from 'src/app/core/repositories/candidates/candidates.repository';
import { GetCandidatesUseCase } from 'src/app/core/usecases/get-candidates/get-candidates.usecase';
import { CandidatesMockImplRepository } from 'src/app/data/repositories/candidates-mock/candidates-mock-impl.repository';
import { CandidatesFacadeService } from './candidates-facade/candidates-facade.service';

@Component({
  standalone: true,
  selector: 'app-candidates-page',
  imports: [
    CommonModule,
    MatDialogModule,
    CandidatesModalComponent,
    CandidatesTableComponent,
  ],
  providers: [
    CandidatesFacadeService,
    GetCandidatesUseCase,
    // MOCKS
    {
      provide: CandidateRepository,
      useClass: CandidatesMockImplRepository,
    },
    // API
    // {
    //   provide: CandidateRepository,
    //   useClass: CandidatesImplRepository,
    // },
  ],
  templateUrl: './candidates-page.component.html',
  styleUrls: ['./candidates-page.component.scss'],
})
export class CandidatesPageComponent {
  private candidatesFacade = inject(CandidatesFacadeService);
  candidates$: Observable<ICandidate[]> = this.candidatesFacade.candidates$;

  showCandidateDetails(candidate: ICandidate) {
    console.log('Show Details', candidate);
    this.candidatesFacade
      .showDetailsDialog(candidate)
      .pipe(take(1))
      .subscribe();
  }
}
