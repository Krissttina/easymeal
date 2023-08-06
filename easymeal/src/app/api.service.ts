import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';
import { Recipe } from './types/Recipe';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getRecipes() {
    const { apiUrl } = environment;
    return this.http.get<Recipe[]>(`${apiUrl}/recipes`);
  }
}