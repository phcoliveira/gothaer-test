import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable, Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

import { MembershipService } from '../../shared/services/membership.service'
import { ProductService } from '../../shared/services/product.service'
import { Membership } from '../../shared/models/membership.model'
import { Product, Price } from '../../shared/models/product.model'
import { Customer } from '../../shared/models/customer.model'

@Component({
  selector: 'customers-profile-entry',
  templateUrl: './profile-entry.component.html',
  styleUrls: ['./profile-entry.component.scss']
})
export class ProfileEntryComponent implements OnInit, OnDestroy {
  public membership: Membership
  public selectedInsurances: Observable<Product>[] = []
  public products: Product[]
  public customer: Customer

  private subscriptions$: Subject<void> = new Subject<void>()

  constructor(
    private membershipService: MembershipService,
    private productService: ProductService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.customer = this.route.parent.snapshot.data.customer

    for (let i = 0; i < this.customer.selected_insurances.length; i++) {
      this.selectedInsurances.push(
        this.productService.getProduct(this.customer.selected_insurances[i])
      )
    }

    this.productService.products$
      .pipe(takeUntil(this.subscriptions$))
      .subscribe((products) => {
        this.products = products
      })
    
    const { membership_type: membershipId } = this.customer
    this.membershipService.getMembership(membershipId)
      .pipe(takeUntil(this.subscriptions$))
      .subscribe((membership) => {
        this.membership = membership
      })
  }

  ngOnDestroy(): void {
    this.subscriptions$.next()
    this.subscriptions$.complete()
  }

  getPrice(customer: Customer, product: Product): Price {
    const { age: _age } = customer
    const age = parseInt(_age)
    const { prices } = product

    return prices.find((price) => {
      return price.minAge <= age && age <= price.maxAge
    })
  }
}
