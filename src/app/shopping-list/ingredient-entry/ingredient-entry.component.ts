import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from  '../shopping-list.service';
import {Ingredient} from '../ingredient.model';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-ingredient-entry',
  templateUrl: './ingredient-entry.component.html',
  styleUrls: ['./ingredient-entry.component.css']
})
export class IngredientEntryComponent implements OnInit {

  constructor(private shoppingListService:ShoppingListService) { }


  ngOnInit(): void {
   }
   
   onSubmit(form:NgForm) {
   	let ingredientName = form.value.Ingredient;
   	let ingredientAmount = form.value.Amount;
   	this.shoppingListService.addIngredient(new Ingredient(ingredientName,ingredientAmount));
   }


}
