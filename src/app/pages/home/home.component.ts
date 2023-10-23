import { AfterViewInit, Component } from '@angular/core';
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

  constructor(
    private _userService: UserService
  ) {
    this._userService.getLogged().subscribe(result => this.loggedUser = result);
    this._userService.getAll().subscribe(result => this.registeredUsers = result);
  }

}
