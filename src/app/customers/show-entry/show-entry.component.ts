import { Component, OnInit } from '@angular/core'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import * as firebase from 'firebase'

export interface Customer {
  name: 'string',
  membership_type: 'string',
  password: 'string',
  age: 'string',
  selected_insurances: 'array',
}

@Component({
  selector: 'app-show-entry',
  templateUrl: './show-entry.component.html',
  styleUrls: ['./show-entry.component.scss']
})
export class ShowEntryComponent implements OnInit {
  private customerDoc: AngularFirestoreDocument<Customer>
  customer: Observable<Customer>

  constructor(private db: AngularFirestore, private router: Router) {
    firebase.auth().onAuthStateChanged(this.handleAuthStateChange.bind(this))
  }

  ngOnInit() {
  }

  handleAuthStateChange(user) {
    if (user) {
      const { uid } = user;

      console.log({ uid })
      this.customerDoc = this.db.doc<Customer>(`customers/${uid}`);
      this.customer = this.customerDoc.valueChanges();
    } else {
      console.log('nope')
      this.router.navigate(['authentication'])
    }
  }

}
