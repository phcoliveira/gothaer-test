import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { Customer } from '../models/customer.model'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(
    private firestore: AngularFirestore,
    private fireauth: AngularFireAuth,
  ) { }

  get customerDoc(): AngularFirestoreDocument<object> {
    const { uid } = this.fireauth.auth.currentUser

    return this.firestore.doc<Customer>(`customers/${uid}`)
  }
  
  get customer$(): Observable<Customer> {
    return this.customerDoc.valueChanges().pipe(
      map((data) => new Customer(data)),
    )
  }
}
