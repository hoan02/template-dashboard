import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth.routes';

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
