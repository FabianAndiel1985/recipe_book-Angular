import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IngredientEntryComponent } from './shopping-list/ingredient-entry/ingredient-entry.component';
import { DisplayIngredientsComponent } from './shopping-list/display-ingredients/display-ingredients.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesElementComponent } from './recipes/recipes-list/recipes-element/recipes-element.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipesComponent,
    LandingComponent,
    FooterComponent,
    HeaderComponent,
    IngredientEntryComponent,
    DisplayIngredientsComponent,
    RecipesDetailComponent,
    RecipesListComponent,
    RecipesElementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
