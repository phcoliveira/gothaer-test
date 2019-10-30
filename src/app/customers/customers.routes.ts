import { Routes } from '@angular/router';

import { ShowEntryComponent } from './show-entry/show-entry.component';

export const entries = [
  ShowEntryComponent,
];

export const AuthenticationRoutes : Routes = [
  {
    path: 'dashboard',
    component: ShowEntryComponent,
  },
];