import { getTestBed, TestBed } from '@angular/core/testing';
import { CandidatesImplRepository } from './candidates-impl.repository';
import { HttpRequest } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import data from 'src/assets/mocks/candidates_mock.json';

describe('CandidatesImplRepository', () => {
  let candidatesImplRepository: CandidatesImplRepository;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CandidatesImplRepository],
    });

    httpMock = getTestBed().inject(HttpTestingController);
    candidatesImplRepository = TestBed.inject(CandidatesImplRepository);
  });

  it('should be created', () => {
    expect(candidatesImplRepository).toBeTruthy();
  });

  describe('#getCandidates', () => {
    it('should call a Get method to retrieve a list of candidates', (done) => {
      candidatesImplRepository.getCandidates().subscribe((data) => {
        expect(data).toEqual(data);
        done();
      });

      const reqMock = httpMock.expectOne(
        (req: HttpRequest<any>) =>
          req.method === 'GET' && req.url.includes('candidates')
      );
      expect(reqMock.request.method).toBe('GET');
      reqMock.flush(data);
    });

    it('should return KO', (done) => {
      candidatesImplRepository.getCandidates().subscribe(
        (data) => {},
        (error) => {
          expect(error).toBeDefined();
          done();
        }
      );

      const reqMock = httpMock.expectOne(
        (req: HttpRequest<any>) =>
          req.method === 'GET' && req.url.includes('candidates')
      );
      expect(reqMock.request.method).toBe('GET');
      reqMock.error(new ErrorEvent('error', { message: 'test error' }));
    });
  });
});
