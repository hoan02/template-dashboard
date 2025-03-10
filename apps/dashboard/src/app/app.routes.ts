import { Route } from '@angular/router';
import { MainLayoutComponent } from '@dashboard/feature';
import { AuthLayoutComponent } from 'libs/dashboard/feature/src/auth/components/AuthLayout.component';
import { HomeComponent } from './components/home/home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'products',
        loadChildren: () =>
          import('products/Module').then((m) => m!.RemoteEntryModule),
      },
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('auth/Module').then((m) => m!.AuthModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }
];
