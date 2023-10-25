import { AfterViewInit, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewBillDialogComponent } from 'src/app/components/new-bill-dialog/new-bill-dialog.component';
import { Bill } from 'src/app/models/bill';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  loggedUser!: User;
  registeredUsers!: User[];
  bills: Bill[] = [
    {
      amount: 300,
      debtors: [
        {
          email: "melissa@email",
          name: "Melissa",
          debtValue: 100
        },
        {
          email: "kelli@email",
          name: "Kelli",
          debtValue: 100
        }

      ]
    }
  ]

  constructor(
    private _userService: UserService,
    public dialog: MatDialog
  ) {
    this._userService.getLogged().subscribe(result => this.loggedUser = result);
    this._userService.getAll().subscribe(result => this.registeredUsers = result);
  }

    openDialog(): void {
      const dialogRef = this.dialog.open(NewBillDialogComponent, {
        data: {},
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

  public createBill() {
    this.openDialog();
  }

}
