import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewBillDialogComponent } from 'src/app/components/new-bill-dialog/new-bill-dialog.component';
import { Bill } from 'src/app/models/bill';
import { User } from 'src/app/models/user';
import { BillService } from 'src/app/services/bill.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  loggedUser!: User;
  registeredUsers!: User[];
  bills!: Bill[];

  constructor(
    private _userService: UserService,
    private _billService: BillService,
    public dialog: MatDialog
  ) {
    this._userService.getLogged().subscribe(result => this.loggedUser = result);
    this.loadBills();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(NewBillDialogComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(() => this.loadBills());
  }

  public createBill() {
    this.openDialog();
  }

  private loadBills() {
    this._billService.getAll(this.loggedUser).subscribe(result => this.bills = result);
  }

}
