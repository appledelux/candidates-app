import { getTestBed, TestBed } from '@angular/core/testing';
import data from 'src/assets/mocks/candidates_mock.json';
import { CandidatesMockImplRepository } from './candidates-mock-impl.repository';

describe('CandidatesImplRepository', () => {
  let candidatesMockImplRepository: CandidatesMockImplRepository;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidatesMockImplRepository],
    });

    candidatesMockImplRepository = TestBed.inject(CandidatesMockImplRepository);
    injector = getTestBed();
  });

  it('should be created', () => {
    expect(candidatesMockImplRepository).toBeTruthy();
  });

  describe('#getCandidates', () => {
    it('should get a candidates list', (done) => {
      // Preps
      const _data = data;
      // Evaluation
      candidatesMockImplRepository.getCandidates().subscribe((data) => {
        // Expect
        expect(data).toEqual(_data);
        done();
      });
    });
  });
});
