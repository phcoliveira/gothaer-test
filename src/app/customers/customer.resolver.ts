import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs'
import { take } from 'rxjs/operators'

import { CustomerService } from '../shared/services/customer.service';
import { Customer } from '../shared/models/customer.model'

@Injectable()
export class CustomerResolver implements Resolve<Observable<Customer>> {
  constructor(private heroService: CustomerService) {}

  resolve(): Observable<Customer> {
    const { customer$ } = this.heroService
    
    return customer$.pipe(take(1))
  }
}