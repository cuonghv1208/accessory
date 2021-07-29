import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { TokenService } from '../token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private tokenService: TokenService,
    private authService: AuthService,
    private spinner: NgxSpinnerService
  ) { }

  pendingRequestsCount = 0;

  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    //   this.pendingRequestsCount ++;
    //   this.spinner.show();
    //   const token = this.tokenService.getToken();
    //   if (token) {
    //     request = request.clone({
    //       setHeaders: {
    //         Authorization: 'Bearer ' + token,
    //       },
    //     });
    //   }

    //   if (!request.url.endsWith('/UploadFile')) {
    //     if (!request.headers.has('Content-Type')) {
    //       request = request.clone({
    //         setHeaders: {
    //           'content-type': 'application/json',
    //         },
    //       });
    //     }
    //   }

    //   request = request.clone({
    //     headers: request.headers.set('Accept', 'application/json'),
    //   });

    //   return next.handle(request).pipe(
    //     map((event: HttpEvent<any>) => {
    //       if (event instanceof HttpResponse) {
    //         // console.log('event--->>>', event);
    //       }
    //       return event;
    //     }),
    //     catchError((error: HttpErrorResponse) => {
    //       // console.log(error.error.error);
    //       if (error.status === 401) {
    //         if (error.error.error === 'invalid_token') {
    //           this.authService
    //             .refreshToken()
    //             .subscribe(() => {
    //               location.reload();
    //             });
    //         } else {
    //           this.router
    //             .navigate(['login'])
    //             .then((_) => {}
    //               // console.log('redirect to login')
    //             );
    //         }
    //       }
    //       return throwError(error);
    //     }),
    //     finalize(() => {
    //       this.pendingRequestsCount --;
    //       if (this.pendingRequestsCount === 0) {
    //         this.spinner.hide();
    //       }
    //     })
    //   );
  }
}
