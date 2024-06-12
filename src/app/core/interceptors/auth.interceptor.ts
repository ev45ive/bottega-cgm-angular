import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { API_URL } from '../../tokens';
import { catchError, pipe, retry, timer } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.getToken();

  return next(
    req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token,
      },
    }),
  );
  // return next(req);
};

export const URLInterceptor: HttpInterceptorFn = (req, next) => {
  const api_url = inject(API_URL);

  if (req.url.match(/^https?/)) return next(req);

  return next(
    req.clone({
      url: api_url + req.url,
    }),
  );
};

export const ErrorInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(errorHandling());
};

// InterceptorFn -> Chain of responsibility

// HttpClient.next = IntA
// IntA.next = IntB
// IntB.next = IntC
// IntC.next = HttpHander -> Observable

// https://www.baeldung.com/spring-mvc-handlerinterceptor

// @Injectable({
//   providedIn: 'root'
// })
// export class NameInterceptor implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     return next.handle(req);
//   }
// }

const errorHandling = <T>() =>
  pipe(
    retry<T>({
      count: 3,
      delay(error, retryCount) {
        if (
          !(
            error instanceof HttpErrorResponse ||
            [500, 0].includes(error.status)
          )
        )
          throw error;

        return timer(retryCount * 500 ** 2); // Exponential backoff
      },
    }),
    catchError((error: unknown) => {
      if (!(error instanceof HttpErrorResponse))
        throw new Error('Unexpected error');

      throw new Error(error.error.error.message);
    }),
  );
