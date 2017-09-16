import { Recipe } from '../recipe.model';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-recipe-list',
  templateUrl: 'recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    {name: 'Суп', description: 'Жидкая еда', imagePath: 'http://multivarenie.ru/images/multivarenie/2014/12/620.jpg' },
    {
      name: 'Каша',
      description: 'Не очень жидкая еда',
      imagePath: 'http://zhenskoe-mnenie.ru/upload/information_system_14/1/3/7/item_13743/information_items_13743.jpg'
    }
  ];

  constructor() {}
  ngOnInit() {}

}
