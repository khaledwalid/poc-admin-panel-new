import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideAnimations} from '@angular/platform-browser/animations';

import {routes} from './app.routes';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {BaseURlHandlerInterceptor} from "../interceptors/base-url-handler.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseURlHandlerInterceptor,
      multi: true,
    },
    provideRouter(routes),
    provideAnimations(),
  ]
};
