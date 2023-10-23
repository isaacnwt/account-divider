import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { LocalStorageUtil } from '../utils/local-storage.util';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public register(user: User) {
    const result = LocalStorageUtil.get(user.email);
    if (result == null)
      return of(LocalStorageUtil.set(user.email, user));
    else return throwError(() => 'User already exists');
  }

  public logIn(user: User) {
    const result = LocalStorageUtil.get(user.email);
    if (result) {
      if (result.password === user.password) return of(LocalStorageUtil.set('LOGGED', result));
      else  return throwError(() => 'Wrong password');
    } else return throwError(() => 'User not found');
  }

  public getAll() {
    return of(LocalStorageUtil.getAll() as User[]);
  }

  public getLogged() {
    const user = LocalStorageUtil.get('LOGGED');
    if (user) return of(user);
    else return throwError(() => new Error('No logged user'));
  }
}
