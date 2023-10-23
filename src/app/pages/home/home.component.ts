import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private _userService: UserService
  ) {
    this._userService.getAll().subscribe(result => {
      console.log(result);
    })
  }

}
