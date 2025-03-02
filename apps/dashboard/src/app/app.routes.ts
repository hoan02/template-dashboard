import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const appRoutes: Route[] = [
  {
    path: 'products',
    loadChildren: () =>
      import('products/Module').then((m) => m!.RemoteEntryModule),
  },
  {
    path: '',
    component: HomeComponent,
  },
];
