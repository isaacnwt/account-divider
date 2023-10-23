import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { LocalStorageUtil } from '../utils/local-storage.util';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public register(user: User) {
    return of(LocalStorageUtil.set(user.email, user));
  }

  public get(email: string) {
    return of(LocalStorageUtil.get(email));
  }
}
