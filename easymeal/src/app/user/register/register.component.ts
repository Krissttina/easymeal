import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { matchPasswordsValidator } from "src/app/shared/validators/match-pswds";
//import { DEFAULT_EMAIL_DOMAINS } from "src/app/shared/constants";
//import { appEmailValidator } from "src/app/shared/validators/app-email-validator";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  form = this.fb.group({
    username: ["", [Validators.required,]],
    email: [
      "",
      [Validators.required],
    ],
    passGroup: this.fb.group(
      {
        password: ["", [Validators.required, Validators.minLength(5)]],
        rePassword: ["", [Validators.required]],
      },
      {
       validators: [matchPasswordsValidator("password", "rePassword")],
      }
    ),
  });

  constructor(private fb: FormBuilder) {}

  onRegister(): void {
    if (this.form.invalid) {
      return;
    }
//new change
    console.log(this.form.value);
  }
}