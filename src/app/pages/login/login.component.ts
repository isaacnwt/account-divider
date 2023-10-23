import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get f() { return this.form.controls; }

  public onSubmit() {
    this._userService.logIn(this.form.value).subscribe({
      next: () => this.router.navigate(['home'], { relativeTo: this.activatedRoute.parent}),
      error: (err) => {
        if (err === "User not found")
          this.snackBar.open('Usuário não cadastrado!', 'Fechar', { duration: 3000 });
        else if (err === "Wrong password")
          this.snackBar.open('Senha incorreta!', 'Fechar', { duration: 3000 });
        else this.snackBar.open('Algo deu errado! Tente novamente...', 'Fechar', { duration: 3000 });
      }
      });
  }
}
