import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth'

// import { Subject } from 'rxjs'
// import { takeUntil } from 'rxjs/operators'

// import { CustomerService } from '../customer.service'
import { Customer } from '../customer.model'

@Component({
  selector: 'customers-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit, OnDestroy {
  public customer: Customer

  // private subscriptions$: Subject<void> = new Subject<void>()

  constructor(
    // private heroService: CustomerService,
    private fireauth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const { customer } = this.route.snapshot.data

    this.customer = customer
    // this.heroService.customer$
    //   .pipe(takeUntil(this.subscriptions$))
    //   .subscribe((customer: Customer) => {
    //     this.customer = customer
    //   })
  }

  ngOnDestroy(): void {
    // this.subscriptions$.next()
    // this.subscriptions$.complete()
  }

  signOut(): void {
    this.fireauth.auth.signOut().then(() => {
      this.router.navigate(['/authentication'])
    })
  }
}
