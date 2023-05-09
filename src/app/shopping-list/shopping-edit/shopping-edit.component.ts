import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef;
  constructor(private slService: ShoppinglistService) {}
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const amoutQtd = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient({ name: ingName, amount: amoutQtd });
    this.slService.addIngredient(newIngredient);
  }
}
