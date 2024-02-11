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
      .post<Recipe>('/recipe', {
        name,
        image,
        ingediants,
        instructions,
        prepTime,
        cookTime,
        servings,
      })
  
  }
}
