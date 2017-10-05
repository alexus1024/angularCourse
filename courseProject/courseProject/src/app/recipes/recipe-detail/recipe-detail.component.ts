import { ShoppingService } from '../../shopping/shopping.service';
import { Ingridient } from '../../shared/ingridient.model';
import { Subscription } from 'rxjs/Rx';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  @Input() recepe: Recipe = { name: '', description: '', imagePath: '', ingridients: [] };
  constructor(private recipeService: RecipeService, private shoppingService: ShoppingService) {
    this.subscription = recipeService.selectedRecipe.subscribe((r) => this.recepe = r);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addToShopping() {
    this.shoppingService.addFromRecipe(this.recepe);
  }

}
