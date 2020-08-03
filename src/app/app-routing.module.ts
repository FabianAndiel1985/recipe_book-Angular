import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
{
        path:"",component: LandingComponent
},
{
        path: "shopping-list",component: ShoppingListComponent
},
{
        path: "recipes",component: RecipesComponent
}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
