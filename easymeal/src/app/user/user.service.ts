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
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) { 
    try {
    const lsUser = localStorage.getItem(this.USER_KEY) || '';
    this.user = JSON.parse(lsUser);
  } catch (error) {
    this.user = undefined;
  }
}

  login(email: string, password: string) {
    return this.http
      .post<User>('/login', { email, password }) //returnes observable
      .pipe(tap((user) => this.user$$.next(user)));
  }

  register(
    username: string,
    email: string,
    password: string,
    rePassword: string
  ) {
    return this.http
      .post<User>('/register', {
        username,
        email,
        password,
        rePassword,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
