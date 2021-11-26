import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';

@Injectable()



export class MyHttpInterceptor implements HttpInterceptor {
    
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add custom header
    debugger;
    const customReq = request.clone({
      headers: request.headers.set('app-author', 'Vinay Singh')
    });

    console.log('processing request', customReq);
    
    // pass on the modified request object
    return next
      .handle(customReq)
      .pipe(tap((ev: HttpEvent<any>) => {
        if (ev instanceof HttpResponse) {
          console.log('processing response', ev);
          ev['testResponseHeader'] = 'testResponseHeader'
        }
      }))
  }
}