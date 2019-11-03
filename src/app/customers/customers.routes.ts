import { Routes } from '@angular/router'

import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component'
import { MembershipsEntryComponent } from './memberships-entry/memberships-entry.component'

export const entries = [
  DashboardLayoutComponent,
  MembershipsEntryComponent,
]

export const CustomersRoutes : Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'memberships',
        component: MembershipsEntryComponent,
      }
    ]
  },
]