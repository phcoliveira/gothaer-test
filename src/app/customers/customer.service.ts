import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth'
import { Observable } from 'rxjs'

import { Customer } from './customer.model'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerDoc: AngularFirestoreDocument<Customer>
  public customer: Observable<Customer|null>

  constructor(
    private firestore: AngularFirestore,
    private fireauth: AngularFireAuth,
  ) {
    this.fireauth.auth.onAuthStateChanged(this.handleAuthStateChange.bind(this))
  }
  

  handleAuthStateChange(user: any) {
    if (user) {
      const { uid } = user

      this.customerDoc = this.firestore.doc<Customer>(`customers/${uid}`)
      this.customer = this.customerDoc.valueChanges()
    } else {
      this.customer = null
    }
  }
}
