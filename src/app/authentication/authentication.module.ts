import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthenticationRoutes, entries } from './authentication.routes';


@NgModule({
  declarations: [
    ...entries,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(AuthenticationRoutes),
  ]
})
export class AuthenticationModule { }
