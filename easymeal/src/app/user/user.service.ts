import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: User | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) { }
//email: string, password: string
  login() {
    return this.http
      .post<User>('/api/login', {  })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  register(
    username: string,
    email: string,
    password: string,
    rePassword: string
  ) {
    return this.http
      .post<User>('/api/register', {
        username,
        email,
        password,
        rePassword,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }


}
