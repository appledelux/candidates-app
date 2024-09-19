import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Seniority } from 'src/app/core/entities/candidate.interface';
import { CandidatesModalComponent } from './candidates-modal.component';

describe('CandidatesModalComponent', () => {
  let component: CandidatesModalComponent;
  let fixture: ComponentFixture<CandidatesModalComponent>;

  beforeEach(() => {
    const mockDialogData = {
      candidate: {
        id: '7',
        name: 'Name 7',
        surname: 'Surname 7',
        seniority: Seniority['junior'],
        yearsExperience: 3,
        availability: true,
      },
    };
    TestBed.configureTestingModule({
      imports: [CandidatesModalComponent, NoopAnimationsModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: mockDialogData }],
    });
    fixture = TestBed.createComponent(CandidatesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
