import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';

@Component({
  selector: 'authentication-index-entry',
  templateUrl: './index-entry.component.html',
  styleUrls: ['./index-entry.component.scss']
})
export class IndexEntryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const uiConfig = {
      signInSuccessUrl: '/customers/dashboard',
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      tosUrl: 'terms-of-service',
      privacyPolicyUrl: function() {
        window.location.assign('privacy-policy');
      },
    };

    const ui = new firebaseui.auth.AuthUI(firebase.auth());

    ui.start('#firebase-ui-auth-container', uiConfig);
  }

}
