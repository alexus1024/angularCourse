import { Ingridient } from '../../shared/ingridient.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingridients: Ingridient[];

  constructor(private shoppingList: ShoppingService) {
    this.ingridients = shoppingList.ingridients;
  }

  ngOnInit() {
  }

}
