import { Routes } from '@angular/router'

import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component'
import { MembershipsEntryComponent } from './memberships-entry/memberships-entry.component'
import { ProfileEntryComponent } from './profile-entry/profile-entry.component'

import { CustomerResolver } from './customer.resolver'

export const entries = [
  DashboardLayoutComponent,
  MembershipsEntryComponent,
  ProfileEntryComponent,
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
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
      {
        path: 'profile',
        component: ProfileEntryComponent,
      },
      {
        path: 'memberships',
        component: MembershipsEntryComponent,
      },
    ]
  },
]