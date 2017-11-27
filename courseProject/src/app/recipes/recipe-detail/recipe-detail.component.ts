import { ShoppingService } from '../../shopping/shopping.service';
import { Ingridient } from '../../shared/ingridient.model';
import { Observable, Subscription } from 'rxjs/Rx';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  // subscription: Subscription;

  @Input() recepe: Observable<Recipe>; // = new BehaviorSubject<Recipe>({ name: '', description: '', imagePath: '', ingridients: [] });
  constructor(
    private recipeService: RecipeService,
    private shoppingService: ShoppingService,
    private route: ActivatedRoute,
    private router: Router) {
    // this.subscription = recipeService.selectedRecipe.subscribe((r) => this.recepe = r);
  }

  current: Recipe;

  currentSubs: Subscription;

  ngOnInit() {
    this.recepe = this.route.paramMap
      .map((params: ParamMap) =>
        this.recipeService.getRecipe(+params.get('id')));

    this.currentSubs = this.recepe.subscribe(val => this.current = val);
  }

  ngOnDestroy() {
    this.currentSubs.unsubscribe();
  }

  addToShopping() {
    this.shoppingService.addFromRecipe(this.current);
  }

}
