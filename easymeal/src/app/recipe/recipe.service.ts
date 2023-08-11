import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../types/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  create(
    name: string,
    image: string,
    ingediants: string,
    instructions: string,
    prepTime: number,
    cookTime: number,
    servings: number,
  ){
    return this.http
      .post<Recipe>('/api/recipe', {
        name,
        image,
        ingediants,
        instructions,
        prepTime,
        cookTime,
        servings,
      })
  }
  // register(
  //   username: string,
  //   email: string,
  //   password: string,
  //   rePassword: string
  // ) {
    
  //   console.log(this.isLogged);
  //   return this.http
  //     .post<User>('/api/register', {
  //       username,
  //       email,
  //       password,
  //       rePassword,
  //     })
  //     .pipe(tap((user) => this.user$$.next(user)));
  // }
}
