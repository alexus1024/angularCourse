import { Ingridient } from '../../shared/ingridient.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {


  @Output() itemSelected = new EventEmitter<Ingridient>();

  ingridients: Ingridient[] = [
    {name: 'Соль', amount: 1},
    {name: 'Сахар', amount: 3}
  ];



  constructor() { }

  ngOnInit() {
  }

  addItem(data: Ingridient) {
    this.ingridients.push(data);
    this.itemSelected.emit(data);
  }
  removeItem(data: Ingridient): boolean {
    const i = this.ingridients.indexOf(data);
    if (i < 0) { return false; }
    this.ingridients.splice(i, 1);
  }

}
