import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { User } from "../Class/user";
@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private userDetails: User;
  constructor() {}
  googleSignIn = (): Promise<User> => {
    return new Promise((resolve) => {
      firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((result) => {
          this.setUserCredentials(result.user);
          resolve(this.userDetails);
        });
    });
  };
  private createNewUser = () => {
    return new User();
  };
  setUserCredentials = (userDetails: firebase.User) => {
    this.userDetails = this.createNewUser();
    this.userDetails.setUserId(userDetails.uid);
    this.userDetails.setDisplayName(userDetails.displayName);
    this.userDetails.setPhotoUrl(userDetails.photoURL);
  };
}
