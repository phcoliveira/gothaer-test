import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable, Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

import { Customer } from '../../shared/models/customer.model'
import { Membership } from '../../shared/models/membership.model'

@Component({
  selector: 'app-memberships-entry',
  templateUrl: './memberships-entry.component.html',
  styleUrls: ['./memberships-entry.component.scss']
})
export class MembershipsEntryComponent implements OnInit {
  public memberships: Membership[]
  public customer: Customer

  private membershipsCol: AngularFirestoreCollection<Membership>
  private memberships$: Observable<Membership[]>
  private subscriptions$: Subject<void> = new Subject<void>()

  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.membershipsCol = this.firestore.collection<Membership>('memberships')
    this.memberships$ = this.membershipsCol.valueChanges()
    this.customer = this.route.parent.snapshot.data.customer


  }
}
