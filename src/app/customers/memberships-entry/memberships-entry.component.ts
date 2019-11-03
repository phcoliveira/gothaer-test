import { Component, OnInit } from '@angular/core'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-memberships-entry',
  templateUrl: './memberships-entry.component.html',
  styleUrls: ['./memberships-entry.component.scss']
})
export class MembershipsEntryComponent implements OnInit {
  private membershipsDoc: AngularFirestoreCollection
  public memberships: Observable<any>

  constructor(
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.membershipsDoc = this.firestore.collection('memberships')
    this.memberships = this.membershipsDoc.valueChanges()
  }
}
