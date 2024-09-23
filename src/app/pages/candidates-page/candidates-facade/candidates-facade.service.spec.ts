import { TestBed } from '@angular/core/testing';

import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { EMPTY, of } from 'rxjs';
import { CandidatesModalComponent } from 'src/app/components/candidates-modal/candidates-modal.component';
import {
  ICandidate,
  Seniority,
} from 'src/app/core/entities/candidate.interface';
import { GetCandidatesUseCase } from 'src/app/core/usecases/get-candidates/get-candidates.usecase';
import { CandidatesFacadeService } from './candidates-facade.service';

const CANDIDATES_MAPPED_MOCK: ICandidate[] = [
  {
    id: '1',
    name: 'Name 1',
    surname: 'Surname 1',
    seniority: Seniority['junior'],
    yearsExperience: 1,
    availability: true,
  },
];

describe('CandidatesFacadeService', () => {
  let service: CandidatesFacadeService;
  let getCandidatesUseCase: jasmine.SpyObj<GetCandidatesUseCase>;
  let matDialog: jasmine.SpyObj<MatDialog>;
  let matDialogRef: jasmine.SpyObj<MatDialogRef<CandidatesModalComponent>>;

  beforeAll(() => {
    jasmine.clock().install();
  });

  afterAll(() => {
    jasmine.clock().uninstall();
  });

  beforeEach(() => {
    const matDialogSpy = jasmine.createSpyObj('MatDialog', [
      'open',
      'afterClosed',
    ]);
    const matDialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);
    const getCandidatesUseCaseSpy = jasmine.createSpyObj(
      'GetCandidatesUseCase',
      ['execute']
    );
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      providers: [
        CandidatesFacadeService,
        // {
        //   provide: MatDialog,
        //   useValue: matDialogSpy,
        // },
        {
          provide: MatDialogRef,
          useValue: matDialogRefSpy,
        },
        {
          provide: GetCandidatesUseCase,
          useValue: getCandidatesUseCaseSpy,
        },
      ],
    });
    service = TestBed.inject(CandidatesFacadeService);
    matDialogRef = TestBed.inject(MatDialogRef) as jasmine.SpyObj<
      MatDialogRef<CandidatesModalComponent>
    >;
    getCandidatesUseCase = TestBed.inject(
      GetCandidatesUseCase
    ) as jasmine.SpyObj<GetCandidatesUseCase>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#showDetailsDialog', () => {
    it('should open the candidatesModalComponent', () => {
      const candidate = {
        id: '4',
        name: 'Name 4',
        surname: 'Surname 4',
        seniority: Seniority['junior'],
        yearsExperience: 3,
        availability: false,
      };

      const openModalSpy = spyOn(service.dialog, 'open').and.returnValue({
        afterClosed: () => EMPTY,
      } as any);

      service.showDetailsDialog(candidate).subscribe();

      expect(openModalSpy).toHaveBeenCalledWith(
        CandidatesModalComponent,
        jasmine.objectContaining({
          minHeight: '270px',
          minWidth: '700px',
          data: {
            candidate,
          },
          autoFocus: false,
        })
      );
    });
  });

  describe('#getCandidates', () => {
    it('should return an observable with a list of candidates', () => {
      getCandidatesUseCase.execute.and.returnValue(of(CANDIDATES_MAPPED_MOCK));
      service.getCandidates().subscribe((candidates) => {
        expect(candidates).toEqual(CANDIDATES_MAPPED_MOCK);
      });
    });
  });
});
