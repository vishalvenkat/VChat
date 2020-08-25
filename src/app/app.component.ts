import { Component } from "@angular/core";
import { AuthenticationService } from "./Services/authentication.service";
import { User } from "./Class/user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private authenticationService: AuthenticationService) {}
  login = (): void => {
    this.authenticationService
      .googleSignIn()
      .then((result: User) => console.log(result.getDisplayName()));
  };
}
