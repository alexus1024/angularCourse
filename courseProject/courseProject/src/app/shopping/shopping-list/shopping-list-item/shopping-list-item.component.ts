import { ShoppingService } from '../../shopping.service';
import { Ingridient } from '../../../shared/ingridient.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  @Input() data: Ingridient;

  constructor(private shoppingService : ShoppingService) { }

  ngOnInit() {
  }

  onSelected(){
this.shoppingService.select(this.data);
  }
}
