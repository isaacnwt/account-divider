import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Bill } from 'src/app/models/bill';
import { Debtor } from 'src/app/models/debtor';
import { User } from 'src/app/models/user';
import { BillService } from 'src/app/services/bill.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-bill-dialog',
  templateUrl: './new-bill-dialog.component.html',
  styleUrls: ['./new-bill-dialog.component.scss'],
})
export class NewBillDialogComponent implements OnInit{
  form!: FormGroup;
  users!: User[];
  loggedUser!: User;

  constructor(
    public dialogRef: MatDialogRef<NewBillDialogComponent>,
    private formBuilder: FormBuilder,
    private _userService: UserService,
    private _billService: BillService
  ) {
    this._userService.getLogged().subscribe(result => this.loggedUser = result)
    this._userService.getAll().subscribe(result =>
      this.users = result.filter(user => user.email !== this.loggedUser.email)
    )
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      debtors: ['']
    })
  }

  public onSubmit() {
    const debtors: Debtor[] = this.form.value.debtors;
    const amount: number = this.form.value.amount;
    debtors.push(this.debtorOf(this.loggedUser));
    debtors.map(debtor => debtor.debtValue = amount/debtors.length);
    this._billService.save(this.loggedUser, { title: this.form.value.title, amount: amount, debtors: debtors });
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public debtorOf(user: User) {
    return Debtor.of(user)
  }
}
