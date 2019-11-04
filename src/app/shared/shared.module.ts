import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerService } from './services/customer.service'
import { MembershipService } from './services/membership.service'
import { ProductService } from './services/product.service'

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        CustomerService,
        MembershipService,
        ProductService,
      ]
    }
  }
}
