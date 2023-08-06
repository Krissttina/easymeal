import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private formsModul: FormsModule){}
 
  newRecipe(form: NgForm): void{
    console.log(form.value);
    
  }
}
