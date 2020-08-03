import { Component, OnInit, Input } from '@angular/core';
import { RecipesService} from '../recipes.service';
import { ShoppingListService} from '../../shopping-list/shopping-list.service';


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredients() {
  	this.shoppingListService.addIngredientsFromRecipes(this.recipe.ingredients);
  }

}
