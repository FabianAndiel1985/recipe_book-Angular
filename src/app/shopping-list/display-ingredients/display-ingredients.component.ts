import { Component, OnInit,OnChanges } from '@angular/core';
import { ShoppingListService } from  '../shopping-list.service';
import {Ingredient} from '../ingredient.model';



@Component({
  selector: 'app-display-ingredients',
  templateUrl: './display-ingredients.component.html',
  styleUrls: ['./display-ingredients.component.css']
})
export class DisplayIngredientsComponent implements OnInit {
  ingredients:Ingredient[];

  constructor(private shoppingListService:ShoppingListService) {
   }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.provideIngredientList();
  	this.shoppingListService.ingredientsFromRecipesSubject.subscribe((ingredients:any)=> {
      this.ingredients=ingredients;
    })
  }
  	
  }