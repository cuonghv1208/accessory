import { Injectable } from '@angular/core';

export interface IUserDataToken {
  Id: number;
  FullName: string;
  UnitCode: string;
  UnitName: string;
  RefreshToken: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

}
