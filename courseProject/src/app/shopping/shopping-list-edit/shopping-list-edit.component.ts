import { Ingridient } from '../../shared/ingridient.model';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  constructor(private shoppingService: ShoppingService) {

  }

  ngOnInit() {
    this.shoppingService.selectedIngridient$.subscribe(i => /*this.form.setValue({'name': i.name, 'amount': i.amount})*/ {

            this.form.setValue({'name': i.name, 'amount':i.amount});
    });
  }

  onAdd(form: NgForm) {
    const value = form.value;
    this.shoppingService.addItem({amount: value.amount, name: value.name});
  }

  onRemove() {
    this.shoppingService.removeItem(this.form.value);
  }

  onClear() {
    this.form.resetForm();
  }

}
