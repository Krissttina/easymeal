import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  subscription: Subscription;
  // Returns true when user is loged in
  // get isLogged(): boolean {
  //   const user = JSON.parse(localStorage.getItem('user')!);
    
  //   return user !== null && user.emailVerified !== false ? true : false;
  // }

  constructor(private http: HttpClient) { 
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
}

  login(email: string, password: string) {
   // console.log(this.isLogged);

    return this.http
      .post<User>('/api/login', { email, password }) //returnes observable
      .pipe(tap((user) => this.user$$.next(user)));
  }

  register(
    username: string,
    email: string,
    password: string,
    rePassword: string
  ) {
    
    console.log(this.isLogged);
    return this.http
      .post<User>('/api/register', {
        username,
        email,
        password,
        rePassword,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    //localStorage.removeItem('user');
    return this.http
    .post<User>('/api/logout', {})
    .pipe(tap(() => this.user$$.next(undefined)));
  }

  getProfile() {
    return this.http
      .get<User>('')
      .pipe(tap((user) => this.user$$.next(user)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}