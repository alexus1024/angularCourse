import { Ingridient } from '../../../shared/ingridient.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  @Output() selected = new EventEmitter<Ingridient>();
  @Input() data: Ingridient;

  constructor() { }

  ngOnInit() {
  }

}
