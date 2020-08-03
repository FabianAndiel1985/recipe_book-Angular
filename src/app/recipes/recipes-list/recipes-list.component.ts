import { Component, OnInit, OnChanges } from '@angular/core';
import { Recipe } from '../receipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit,OnChanges {
  receipes:Recipe[];
  
  constructor(private recipesService:RecipesService) { }

  ngOnInit(): void {
  	this.receipes = this.recipesService.provideRecipes();
  }

  ngOnChanges() {
  	this.receipes = this.recipesService.provideRecipes();
  }

}
