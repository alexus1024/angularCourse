import { Ingridient } from '../shared/ingridient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {


  selectedIngridient: Ingridient = <Ingridient>{};
  constructor() { }

  ngOnInit() {
  }
  onItemSelected(ing: Ingridient) {
    this.selectedIngridient = ing;
  }
}
