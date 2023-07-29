import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { matchPasswordsValidator } from "src/app/shared/validators/match-pswds";

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
      [
        Validators.required,
        Validators.email
      ],
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

    console.log(this.form.value);
  }
}