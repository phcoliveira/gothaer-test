import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard'
  
import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthenticationModule } from './authentication/authentication.module'
import { CustomersModule } from './customers/customers.module';
  
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthGuardModule,
    AppRoutingModule,
    NoopAnimationsModule,
    AuthenticationModule,
    CustomersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
