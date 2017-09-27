import { Ingridient } from '../../shared/ingridient.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  constructor() { }

  @Output() addItem = new EventEmitter<Ingridient>();
  @Output() removeItem = new EventEmitter<Ingridient>();

  @Input() data: Ingridient;

  ngOnInit() {
  }

  onAdd() {
    const newItem = Object.assign({}, this.data);
    this.addItem.emit(newItem);
  }

  onRemove() {
    this.removeItem.emit(this.data);
  }

  onClear() {
    this.data.name = '';
    this.data.amount = 0;
  }

}
