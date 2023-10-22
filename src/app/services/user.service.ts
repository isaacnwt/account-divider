import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { LocalStorage } from '../utils/local-storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public register(user: User) {
    LocalStorage.set(user.email, JSON.stringify(user));
  }
}
