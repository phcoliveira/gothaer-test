import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

const redirectToCustomers = () => redirectLoggedInTo(['customers'])
const redirectToAuthentication = () => redirectUnauthorizedTo(['authentication'])

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full',
  },
  {
    path: 'authentication',
    loadChildren: './authentication/authentication.module#AuthenticationModule',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectToCustomers}
  },
  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectToAuthentication }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
