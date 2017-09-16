import { Ingridient } from '../../shared/ingridient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingridients: Ingridient[] = [
    {name: 'salt', amount: 1},
    {name: 'shugar', amount: 3}
  ];


  constructor() { }

  ngOnInit() {
  }

}
