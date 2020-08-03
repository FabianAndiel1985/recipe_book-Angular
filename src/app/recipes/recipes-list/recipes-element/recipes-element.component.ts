import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../receipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipes-element',
  templateUrl: './recipes-element.component.html',
  styleUrls: ['./recipes-element.component.css']
})
export class RecipesElementComponent implements OnInit {
  
@Input() recipe:Recipe;

  constructor(private recipesService:RecipesService) { }

  ngOnInit(): void {
  }

  onRecipeClicked() {
  	this.recipesService.clickedRecipeElemement.next(this.recipe);
  }

}
