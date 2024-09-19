import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { CandidatesFacadeService } from './candidates-facade/candidates-facade.service';
import { CandidatesPageComponent } from './candidates-page.component';

describe('CandidatesPageComponent', () => {
  let component: CandidatesPageComponent;
  let fixture: ComponentFixture<CandidatesPageComponent>;
  let candidatesFacadeService: jasmine.SpyObj<CandidatesFacadeService>;

  beforeEach(() => {
    const candidatesFacadeServiceSpy = jasmine.createSpyObj(
      'CandidatesFacadeService',
      ['showDetailsDialog'],
      {
        candidates$: of([]),
      }
    );
    TestBed.configureTestingModule({
      imports: [CandidatesPageComponent],
      providers: [
        {
          provide: CandidatesFacadeService,
          useValue: candidatesFacadeServiceSpy,
        },
      ],
    });
    fixture = TestBed.createComponent(CandidatesPageComponent);
    component = fixture.componentInstance;
    candidatesFacadeService = TestBed.inject(
      CandidatesFacadeService
    ) as jasmine.SpyObj<CandidatesFacadeService>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
