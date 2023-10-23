import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
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
    this._userService.get(this.form.value.email).subscribe(result => {
      if(result) {
        if (result.password === this.form.value.password) {
          this.router.navigate(['home'], { relativeTo: this.activatedRoute.parent});
        } else {
          this.snackBar.open('Senha incorreta!', 'Fechar', { duration: 3000 });
        }
      } else {
        this.snackBar.open('Usuário não cadastrado!', 'Fechar', { duration: 3000 });
      }
    });
  }
}
