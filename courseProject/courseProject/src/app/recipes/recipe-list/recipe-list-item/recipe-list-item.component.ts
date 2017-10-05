import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../recipe.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css'],
})
export class RecipeListItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {

  }

  onSelect() {
    this.recipeService.selectedRecipe.next(this.recipe);
  }

}
