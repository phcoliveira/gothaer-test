import { Component, OnInit } from '@angular/core'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth'
import { Observable } from 'rxjs'
import { ActivatedRoute, ParamMap, Router } from '@angular/router'

export interface Customer {
  name: string,
  membership_type: string,
  password: string,
  age: string,
  [selected_insurances: number]: string,
}

@Component({
  selector: 'customers-show-entry',
  templateUrl: './show-entry.component.html',
  styleUrls: ['./show-entry.component.scss']
})
export class ShowEntryComponent implements OnInit {
  private customerDoc: AngularFirestoreDocument<Customer>
  customer: Observable<Customer>
  view: string|null

  constructor(
    private firestore: AngularFirestore,
    private fireauth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.fireauth.auth.onAuthStateChanged(this.handleAuthStateChange.bind(this))
  }

  handleAuthStateChange(user) {
    if (user) {
      const { uid } = user;

      this.customerDoc = this.firestore.doc<Customer>(`customers/${uid}`);
      this.customer = this.customerDoc.valueChanges();
    } else {
      this.router.navigate(['authentication'])
    }
  }

}
