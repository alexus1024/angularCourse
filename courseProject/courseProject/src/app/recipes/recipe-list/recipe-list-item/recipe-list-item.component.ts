import { Recipe } from '../../recipe.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css'],
})
export class RecipeListItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() selected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

}
