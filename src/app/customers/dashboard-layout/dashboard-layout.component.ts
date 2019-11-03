import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

import { CustomerService } from '../customer.service'
import { Customer } from '../customer.model'

@Component({
  selector: 'customers-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit, OnDestroy {
  public customer: Customer|null

  private subscriptions: Subject<void> = new Subject<void>()

  constructor(
    private heroService: CustomerService
  ) { }

  ngOnInit(): void {
    this.heroService.customer
      .pipe(takeUntil(this.subscriptions))
      .subscribe((customer: Customer|null) => {
        this.customer = customer
      })
  }

  ngOnDestroy(): void {
    this.subscriptions.next()
    this.subscriptions.complete()
  }
}
