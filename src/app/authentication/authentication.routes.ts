import { Routes } from '@angular/router';

import { IndexEntryComponent } from './index-entry/index-entry.component';

export const entries = [
  IndexEntryComponent,
];

export const AuthenticationRoutes : Routes = [
  {
    path: '',
    component: IndexEntryComponent,
  },
];