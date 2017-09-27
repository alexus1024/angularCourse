import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeListItemComponent } from './recipes/recipe-list/recipe-list-item/recipe-list-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './shopping/shopping-list/shopping-list-item/shopping-list-item.component';
import { ShoppingListEditComponent } from './shopping/shopping-list-edit/shopping-list-edit.component';

import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingComponent } from './shopping/shopping.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent, RecipeListItemComponent, RecipeDetailComponent,
     ShoppingListComponent, ShoppingListItemComponent, HeaderComponent, RecipesComponent, ShoppingListEditComponent, ShoppingComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
