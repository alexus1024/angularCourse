import { Ingridient } from '../shared/ingridient.model';
import { Observable, Subject, } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {

    private recipes: Recipe[] = [
        {
            name: 'Суп', description: 'Жидкая еда', imagePath: 'assets/images/soup.jpg', ingridients: [
                { name: 'Картошка', amount: 200 },
                { name: 'Вода', amount: 1000 },
                { name: 'Мясо', amount: 500 },
            ]
        },
        {
            name: 'Каша', description: 'Не очень жидкая еда', imagePath: 'assets/images/kasha.jpg', ingridients: [
                { name: 'Крупа', amount: 100 },
                { name: 'Молоко', amount: 200 },
                { name: 'Соль', amount: 5 },
            ]
        },
        {
            name: 'Фастфуд', description: 'Быстрая еда', imagePath: 'assets/images/fastfood.jpg', ingridients: [
                { name: 'Булочка', amount: 100 },
                { name: 'Мясцо', amount: 100 },
                { name: 'Зелень', amount: 50 },
                { name: 'Соус', amount: 10 },
            ]
        }
    ];

    selectedRecipe: BehaviorSubject<Recipe>;

    constructor() {
        this.selectedRecipe = new BehaviorSubject<Recipe>(null);
    }

    getRecipes() {
        return this.recipes.slice();
    }

}
