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
      return of(LocalStorageUtil.set("USER_" + user.email, user));
    else return throwError(() => 'User already exists');
  }

  public logIn(user: User) {
    const result = LocalStorageUtil.get("USER_" + user.email);
    if (result) {
      if (result.password === user.password) return of(LocalStorageUtil.set('LOGGED', result));
      else  return throwError(() => 'Wrong password');
    } else return throwError(() => 'User not found');
  }

  public getAll() {
    const storage = LocalStorageUtil.getAll();
    let users: User[] = [];

    for (const key in storage) {
      if (key.includes("USER_"))
        users.push(LocalStorageUtil.get(key));
    }

    return of(users);
  }

  public getLogged() {
    const user = LocalStorageUtil.get('LOGGED');
    if (user) return of(user);
    else return throwError(() => new Error('No logged user'));
  }
}
