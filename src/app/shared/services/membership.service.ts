import { Injectable } from '@angular/core'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { Membership } from '../models/membership.model'

@Injectable({
  providedIn: 'root'
})
export class MembershipService {
  constructor(
    private firestore: AngularFirestore
  ) { }

  get membershipsCol(): AngularFirestoreCollection<object> {
    return this.firestore.collection<object>('memberships')
  }

  get memberships$(): Observable<Membership[]> {
    return this.membershipsCol.valueChanges().pipe(
      map((data) => data.map((obj) => new Membership(obj)))
    )
  }
}
