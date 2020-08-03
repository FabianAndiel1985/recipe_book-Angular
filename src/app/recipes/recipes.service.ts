import { Injectable } from '@angular/core';
import { Recipe } from './receipe.model';
import { Ingredient } from '../shopping-list/ingredient.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class RecipesService {

  constructor() { }

    recipes = [
  	new Recipe("Recipe 1","extremely delicious",[new Ingredient("Ingredient 1",40),new Ingredient("Ingredient 2",70)],"../assets/images/cherries.jpg"),
  	new Recipe("Recipe 2","tasty",[new Ingredient("Ingredient 3",40),new Ingredient("Ingredient 4",70)],"../assets/images/cord.jpg"),
  	new Recipe("Recipe 3","delicious",[new Ingredient("Ingredient X",70),new Ingredient("Ingredient Z",70)],"../assets/images/potato.jpg"),
  ];

  provideRecipes() {
  	return this.recipes;
  }

  clickedRecipeElemement = new Subject<Recipe>();

}
