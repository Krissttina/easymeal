import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';
import { Recipe } from './types/Recipe';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
 /* static createRecipe(name: any, image: any, ingediants: any, instructions: any, prepTime: any, cookTime: any, servings: any) {
    throw new Error('Method not implemented.');
  }*/
  constructor(private http: HttpClient) {}

  recipes: any = [];

  get recipesCollection(): string {
    return this.recipes || [];
  }

  getRecipes() {
    const { apiUrl } = environment;
    return this.http.get<Recipe[]>(`${apiUrl}/recipes`);
  }

  createRecipe(
    name: string,
    image: string,
    ingediants: number,
    instructions: string,
    prepTime: number,
    cookTime: number,
    servings: number,
  ){
    return this.http.post<Recipe>('/recipes', {name,
      image,
      ingediants,
      instructions,
      prepTime,
      cookTime,
      servings});
  }
}