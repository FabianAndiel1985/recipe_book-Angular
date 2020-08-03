import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {
  constructor() { }

  ingredients = [
  	new Ingredient("Protein",40),
  	new Ingredient("Carbs",10),
  	new Ingredient("Vitamins",10)
  ];

  ingredientsFromRecipesSubject = new Subject<Ingredient[]>();
  
  addIngredient(ingredient:Ingredient) {
    this.ingredients.push(ingredient);
  }

  addIngredientsFromRecipes(ingredients:Ingredient[]) {
    this.ingredients = this.ingredients.concat(ingredients);
     this.ingredientsFromRecipesSubject.next(this.ingredients);
  }
  
  provideIngredientList() {
  	return this.ingredients;
  }
}
