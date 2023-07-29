import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';
import { appEmailValidator } from 'src/app/shared/validators/emailValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //appEmailDomains = appEmailValidator;
  constructor(private userService: UserService, private router: Router) {}

  onLogin(form: NgForm): void {
    if(form.invalid){
      return;
    }
    console.log(form.value);

    this.userService.login();
    this.router.navigate(["/"]);
  }
}
