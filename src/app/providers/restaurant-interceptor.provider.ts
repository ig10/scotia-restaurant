import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap, materialize, delay, dematerialize } from 'rxjs/operators';
import * as mockedMenu from '../services/mockedMenu.json';

@Injectable()
export class RestaurantInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Mocks server request with slight delay
    return of(null).pipe(mergeMap(() => {
      if (req.url.endsWith('/menu-list')) {
        return of(new HttpResponse({ status: 200, body: (mockedMenu as any).default }));
      }

      return next.handle(req);
    }))
    .pipe(materialize())
    .pipe(delay(1500))
    .pipe(dematerialize());
  }
}
