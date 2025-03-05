import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './components/auth.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: { returnUrl: window.location.pathname },
      },
      {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full',
      }
    ],
  },
];
