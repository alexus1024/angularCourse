import { Ingridient } from '../../shared/ingridient.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  constructor(private shoppingService: ShoppingService) {
    shoppingService.selectedIngridient$.subscribe(i => this.data = i || { amount : 0, name : '' });
  }

  @Input() data: Ingridient;

  ngOnInit() {
  }

  onAdd() {
    const newItem = Object.assign({}, this.data);
    this.shoppingService.addItem(newItem);
  }

  onRemove() {
    this.shoppingService.removeItem(this.data);
  }

  onClear() {
    this.data.name = '';
    this.data.amount = 0;
  }

}
