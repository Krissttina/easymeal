import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  o$ = new Observable();

  newRecipe(form: NgForm): void {
    if (form.invalid) {
      return;
    }

   // console.log('err');

    const {name,
      image,
      ingediants,
      instructions,
      prepTime,
      cookTime,
      servings} = form.value;
      
    this.apiService.createRecipe(name,
      image,
      ingediants,
      instructions,
      prepTime,
      cookTime,
      servings).subscribe();

  } 
}
