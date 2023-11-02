import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-bill-dialog',
  templateUrl: './new-bill-dialog.component.html',
  styleUrls: ['./new-bill-dialog.component.scss'],
})
export class NewBillDialogComponent implements OnInit{
  form!: FormGroup;
  users!: User[];

  constructor(
    public dialogRef: MatDialogRef<NewBillDialogComponent>,
    private formBuilder: FormBuilder,
    private _userService: UserService
  ) {
    this._userService.getAll().subscribe(result => {
      console.log(result);
      this.users = result;
    })
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      amount: ['', [Validators.required]],
      debtors: ['']
    })
  }

  public onSubmit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
