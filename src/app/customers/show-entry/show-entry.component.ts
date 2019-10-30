import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'app-show-entry',
  templateUrl: './show-entry.component.html',
  styleUrls: ['./show-entry.component.scss']
})
export class ShowEntryComponent implements OnInit {
  customer: Observable<any>;

  constructor(db: AngularFirestore) {
    firebase.auth().onAuthStateChanged(this.handleAuthStateChange);
  }

  ngOnInit() {
  }

  handleAuthStateChange(user) {
    if (user) {
      console.log({ user });
    }
  }

}
