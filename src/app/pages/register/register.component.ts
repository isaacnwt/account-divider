import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get f() { return this.form.controls; }

  public onSubmit() {
    this._userService.register(this.form.value).subscribe({
      next: () => {
        this.snackBar.open('Cadastro realizado com sucesso!', 'Fechar', { duration: 3000 });
        this.router.navigate(['..'])
      },
      error: () => this.snackBar.open('Email já cadastrado!', 'Fechar', { duration: 3000 })
    })
  }

}
