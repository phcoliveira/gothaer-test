import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './pages/authentication/authentication.component';

export const pages = [
  AuthenticationComponent,
];

const routes: Routes = [
  {
    path: '',
    redirectTo: '/authentication',
    pathMatch: 'full',
  },
  {
    path: 'authentication',
    component: AuthenticationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
