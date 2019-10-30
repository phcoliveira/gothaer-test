import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const uiConfig = {
      signInSuccessUrl: '/to-be-defined',
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
