import { Recipe } from '../recipe.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-recipe-list',
  templateUrl: 'recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    { name: 'Суп', description: 'Жидкая еда', imagePath: 'assets/images/soup.jpg' },
    { name: 'Каша', description: 'Не очень жидкая еда', imagePath: 'assets/images/kasha.jpg' },
    { name: 'Фастфуд', description: 'Быстрая еда', imagePath: 'assets/images/fastfood.jpg' }
  ];

  @Output() itemSelected = new EventEmitter<Recipe>();

  constructor() { }
  ngOnInit() { }

  onItemSelected(item: Recipe) {
    this.itemSelected.emit(item);
  }
  onAddRecipe() {
    this.recipes.push({description: 'Новый рецепт', imagePath: '', name: 'Новый рецепт'});
  }
}
