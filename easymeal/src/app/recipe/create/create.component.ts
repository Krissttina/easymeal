import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private router: Router
    ){}

    
 
  newRecipe(form: NgForm): void{
    if (form.invalid) {
      return;
    }

    console.log(form.value);
    
      const {
        name,
        image,
        ingediants,
        instructions,
        prepTime,
        cookTime,
        servings,
    } = form.value;
  
  this.recipeService.create(
    name,
    image,
    ingediants,
    instructions,
    prepTime,
    cookTime,
    servings,
  ).subscribe(() => {
    this.router.navigate(['/catalog']);
  })
  
  
  }
  //   this.userService
  //   .register(username!, email!, password!, rePassword!)
  //   .subscribe(() => {
  //     this.router.navigate(['/']);
  //   })
}
