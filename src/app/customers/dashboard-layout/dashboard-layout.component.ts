import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth'

import { Customer } from '../customer.model'

@Component({
  selector: 'customers-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit {
  public customer: Customer

  constructor(
    private fireauth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const { customer } = this.route.snapshot.data

    this.customer = customer
  }

  signOut(): void {
    this.fireauth.auth.signOut().then(() => {
      this.router.navigate(['/authentication'])
    })
  }
}
