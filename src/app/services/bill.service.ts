import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { Bill } from '../models/bill';
import { LocalStorageUtil } from '../utils/local-storage.util';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor() { }

  public save(user: User, bill: Bill) {
    let bills: Bill[] = [];
    bills.push(bill);
    return of(LocalStorageUtil.set("BILLS_" + user.email, bills));
  }

  public getAll(user: User) {
    let bills: Bill[] = [];
    bills = LocalStorageUtil.get("BILLS_" + user.email);
    return of(bills);
  }
}
