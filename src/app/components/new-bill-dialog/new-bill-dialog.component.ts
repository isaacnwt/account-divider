import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-bill-dialog',
  templateUrl: './new-bill-dialog.component.html',
  styleUrls: ['./new-bill-dialog.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule
  ],
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
