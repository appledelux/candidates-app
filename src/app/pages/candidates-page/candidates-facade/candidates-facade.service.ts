import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CandidatesModalComponent } from 'src/app/components/candidates-modal/candidates-modal.component';
import { ICandidate } from 'src/app/core/entities/candidate.interface';
import { GetCandidatesUseCase } from 'src/app/core/usecases/get-candidates/get-candidates.usecase';

@Injectable()
export class CandidatesFacadeService {
  getCandidatesUseCase = inject(GetCandidatesUseCase);
  dialog = inject(MatDialog);
  candidates$ = this.getCandidates();

  getCandidates(): Observable<ICandidate[]> {
    return this.getCandidatesUseCase.execute();
  }

  showDetailsDialog(candidate: ICandidate) {
    const dialogRef = this.dialog.open<CandidatesModalComponent>(
      CandidatesModalComponent,
      {
        minHeight: '270px',
        minWidth: '700px',
        data: {
          candidate,
        },
        autoFocus: false,
      }
    );

    return dialogRef.afterClosed() as Observable<void>;
  }
}
