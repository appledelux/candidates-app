import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesModalComponent } from './candidates-modal.component';

describe('CandidatesModalComponent', () => {
  let component: CandidatesModalComponent;
  let fixture: ComponentFixture<CandidatesModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatesModalComponent]
    });
    fixture = TestBed.createComponent(CandidatesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
