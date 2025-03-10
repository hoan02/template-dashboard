import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth.routes';
import { AuthLayoutComponent } from './components/AuthLayout.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(authRoutes)],
  declarations: [AuthLayoutComponent, LoginComponent, AuthLayoutComponent],
  exports: [AuthLayoutComponent]
})
export class AuthModule { }
