import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-recipe-list',
  templateUrl: 'recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];



  constructor(private recipeService: RecipeService) { }
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();

  }

  onItemSelected(item: Recipe) {

  }
  onAddRecipe() {
    this.recipes.push({id: 0, description: 'Новый рецепт', imagePath: '', name: 'Новый рецепт', ingridients: []});
  }
}
