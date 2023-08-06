import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class RecipeModule { }
