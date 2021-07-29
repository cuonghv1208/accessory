import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';
import { AuthService, IUserDataToken } from './auth.service';
import { CookieService } from 'ngx-cookie';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

const ACCESS_TOKEN = 'access_token';
const EXPIRED_TOKEN = 'expire_token';
const USER_INFO = 'user_info';
const PROJECT_INVEST = 'project_invest';

@Injectable({
  providedIn: 'root',
})
export class TokenService {

  constructor (private cookieService: CookieService) {
  }

  setCookieExpired(expired: Date) {
    this.cookieService.put(EXPIRED_TOKEN, expired.toString(), {expires: expired});
  }

  getCookieExpired(): Date | any {
    const dt = this.cookieService.get(EXPIRED_TOKEN);
    if (dt === null || dt === undefined) {
      return null;
    }
    return new Date(dt);
  }

  setUserInfo(userInfo: any) {
    this.cookieService.putObject(USER_INFO, userInfo, { expires: this.getCookieExpired()});
  }

  getUserInfo(): Observable<IUserDataToken> | Observable<any> {
    const us = this.cookieService.getObject(USER_INFO);
    if (us === null || us === undefined) {
      return of(null);
    }
    return of(us as IUserDataToken);
  }

  removeCookie() {
    this.cookieService.removeAll();
  }

  // getToken(): string {
  //   return localStorage.getItem(ACCESS_TOKEN);
  // }

  // saveToken(token): void {
  //   localStorage.setItem(ACCESS_TOKEN, token);
  // }

  removeToken(): void {
    localStorage.removeItem(ACCESS_TOKEN);
  }

  // getProjectInvest(): string {
  //   return localStorage.getItem(PROJECT_INVEST);
  // }

  // saveProjectInvest(project): Observable<any> {
  //   localStorage.setItem(PROJECT_INVEST, project);
  //   const body = new TokenForRefresh({
  //     tag: project,
  //     // token: this.getToken()
  //   });
  //     return this.appQthtService.appAuthApiAuthRefreshToken(body)
  //       .pipe(
  //         tap(res => {
  //           if (res.code === SUCCESS_RESPONE) {
  //             this.removeToken();
  //             this.saveToken(res.data.jwtToken);
  //           }
  //         }),
  //         catchError(TokenService.handleError)
  //       );
  // }

  private static handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
