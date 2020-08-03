import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './receipe.model';
import { RecipesService } from './recipes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit, OnDestroy {
  selectedReceipe:Recipe;

  constructor(private recipesService:RecipesService) {
  	 } 


  private mySubscription:Subscription;

  ngOnInit(): void {
    this.mySubscription = this.recipesService.clickedRecipeElemement.subscribe((recipe:Recipe)=> {
      this.selectedReceipe=recipe
    }, error=> {
        alert(error.message);
      }
    )
	}

  

  ngOnDestroy():void {
    this.mySubscription.unsubscribe();
  }


}
