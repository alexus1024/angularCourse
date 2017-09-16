import { Ingridient } from '../../../shared/ingridient.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  @Input() data: Ingridient;

  constructor() { }

  ngOnInit() {
  }

}
