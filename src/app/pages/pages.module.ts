import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagesRoutingModule } from './pages-routing.module';
import { RegisterComponent } from './register/register.component';
import { NewBillDialogComponent } from '../components/new-bill-dialog/new-bill-dialog.component';


// TODO - remove NewBillDialogComponent
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NewBillDialogComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule
  ]
})
export class PagesModule { }
