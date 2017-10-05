import { Observable, Subject, } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {

    private recipes: Recipe[] = [
        { name: 'Суп', description: 'Жидкая еда', imagePath: 'assets/images/soup.jpg' },
        { name: 'Каша', description: 'Не очень жидкая еда', imagePath: 'assets/images/kasha.jpg' },
        { name: 'Фастфуд', description: 'Быстрая еда', imagePath: 'assets/images/fastfood.jpg' }
    ];

    selectedRecipe: BehaviorSubject<Recipe>;

    constructor() {
        this.selectedRecipe = new BehaviorSubject<Recipe>(null);
    }

    getRecipes() {
        return this.recipes.slice();
    }

}
