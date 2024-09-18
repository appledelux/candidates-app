import { getTestBed, TestBed } from '@angular/core/testing';
import { CandidatesImplRepository } from './candidates-impl.repository';

describe('CandidatesImplRepository', () => {
  let candidatesImplRepository: CandidatesImplRepository;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidatesImplRepository],
    });

    candidatesImplRepository = TestBed.inject(CandidatesImplRepository);
    injector = getTestBed();
  });

  it('should be created', () => {
    expect(candidatesImplRepository).toBeTruthy();
  });

  describe('#getCandidates', () => {
    it('should get a candidates list', () => {});

    it('should return KO', () => {});
  });

  describe('#createCandidate', () => {
    it('should return OK', () => {});

    it('should return KO', () => {});
  });
});
