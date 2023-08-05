import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { matchPasswordsValidator } from 'src/app/shared/validators/match-pswds';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        rePassword: ['', [Validators.required]],
      },
      {
        validators: [matchPasswordsValidator('password', 'rePassword')],
      }
    ),
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  onRegister(): void {
    if (this.form.invalid) {
      return;
    }
    
    const {
      username,
      email,
      passGroup: { password, rePassword } = {},
    } = this.form.value;

    this.userService
    .register(username!, email!, password!, rePassword!)
    .subscribe(() => {
      this.router.navigate(['/']);
    })

    console.log(this.form.value);
    //localStorage.setItem('user', JSON.stringify(this.form.value))
    //this.router.navigate(['/']);
    //this.form.reset();
  }
}
