import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}

  onLogin(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    //this.userService.login();
    this.router.navigate(["/"]);
  }
}
