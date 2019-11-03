import { Routes } from '@angular/router'

import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component'
import { MembershipsEntryComponent } from './memberships-entry/memberships-entry.component'

import { CustomerResolver } from './customer.resolver'

export const entries = [
  DashboardLayoutComponent,
  MembershipsEntryComponent,
]

export const resolvers = [
  CustomerResolver
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
    resolve: { customer: CustomerResolver },
    children: [
      {
        path: 'memberships',
        component: MembershipsEntryComponent,
      }
    ]
  },
]