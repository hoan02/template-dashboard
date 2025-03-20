import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth.routes';
import { AuthLayoutComponent } from './components/AuthLayout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FloatLabel } from 'primeng/floatlabel';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    ReactiveFormsModule,
    ProgressSpinnerModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    FloatLabel
  ],
  declarations: [AuthLayoutComponent, LoginComponent, AuthLayoutComponent],
  exports: [AuthLayoutComponent]
})
export class AuthModule { }
