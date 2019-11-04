import { Injectable } from '@angular/core'
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from '@angular/fire/firestore'
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

  getMembershipDoc(id: string): AngularFirestoreDocument<object> {
    return this.firestore.doc<object>(`memberships/${id}`)
  }

  getMembership(id: string): Observable<Membership> {
    return this.getMembershipDoc(id)
      .valueChanges()
      .pipe(
        map((obj) => new Membership(obj))
      )
  }
}
