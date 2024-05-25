import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class BaseURlHandlerInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const BaseURL = 'https://localhost:7185';
    if (req.url) {
      if (!req.url.includes('i18n')) {
        req = req.clone({
          url: BaseURL + req.url,
        });
      }
    }
    return next.handle(req);
  }
}
