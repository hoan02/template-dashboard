import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { authRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
  ],
  declarations: [
    AuthComponent,
    LoginComponent
  ],
})
export class FeatureModule { }
