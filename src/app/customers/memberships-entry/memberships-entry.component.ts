import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

import { MembershipService } from '../../shared/services/membership.service'
import { ProductService } from '../../shared/services/product.service'
import { Membership } from '../../shared/models/membership.model'
import { Product } from '../../shared/models/product.model'
import { Customer } from '../../shared/models/customer.model'

@Component({
  selector: 'customers-memberships-entry',
  templateUrl: './memberships-entry.component.html',
  styleUrls: ['./memberships-entry.component.scss']
})
export class MembershipsEntryComponent implements OnInit, OnDestroy {
  public memberships: Membership[]
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

    this.membershipService.memberships$
      .pipe(takeUntil(this.subscriptions$))
      .subscribe((memberships) => {
        this.memberships = memberships
      })
    
    this.productService.products$
      .pipe(takeUntil(this.subscriptions$))
      .subscribe((products) => {
        this.products = products
      })
  }

  ngOnDestroy(): void {
    this.subscriptions$.next()
    this.subscriptions$.complete()
  }

  get sortedMemberships(): Membership[] {
    const { memberships } = this;

    if (Array.isArray(memberships)) {
      return memberships.sort((a, b) => a.level - b.level)
    } else {
      return []
    }
  }

  getAvailableProductsForMembership(membership: Membership): Membership[] {
    const { products } = this;

    if (Array.isArray(products)) {
      return products.filter((p) => p.level <= membership.level)
    } else {
      return []
    }
  }
}
