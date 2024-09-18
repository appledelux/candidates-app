import { Observable } from 'rxjs';

export interface UseCase<T, R> {
  execute(params: T): Observable<R>;
}
