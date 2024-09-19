import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesTableComponent } from './candidates-table.component';

describe('CandidatesTableComponent', () => {
  let component: CandidatesTableComponent;
  let fixture: ComponentFixture<CandidatesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CandidatesTableComponent],
    });
    fixture = TestBed.createComponent(CandidatesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
