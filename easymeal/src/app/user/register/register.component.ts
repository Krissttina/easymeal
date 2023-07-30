import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { matchPasswordsValidator } from "src/app/shared/validators/match-pswds";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

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

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
    ) {}

  onRegister(): void {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);

    const { 
      username,
      email,
      passGroup: { password, rePassword } = {},
    } = this.form.value;

    this.userService
    .register(username!, email!, password!, rePassword!
      )
      this.router.navigate(["/login"]);
    
  }
}