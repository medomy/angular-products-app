import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {finalize} from 'rxjs/operators'
import { LoaderservService } from './services/loader/loaderserv.service';

@Injectable()
export class LoaderintInterceptor implements HttpInterceptor {

  constructor(private loader : LoaderservService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loader.setIsloading(true);
    return next.handle(request).pipe(finalize(()=>this.loader.setIsloading(false)));
    
  }
}
