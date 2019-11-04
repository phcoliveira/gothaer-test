import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'

import { SharedModule } from '../shared/shared.module'
import { CustomersRoutes, entries, resolvers } from './customers.routes';
import { ProfileEntryComponent } from './profile-entry/profile-entry.component'

@NgModule({
  declarations: [
    ...entries,
    ProfileEntryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    RouterModule.forChild(CustomersRoutes),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
  ],
  providers: [
    ...resolvers
  ]
})
export class CustomersModule { }
