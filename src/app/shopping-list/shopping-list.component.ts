import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient({ name: 'Apples', amount: 10 }),
    new Ingredient({ name: 'Tomatoes', amount: 20 }),
    new Ingredient({ amount: 30, name: 'Avocados' }),
  ];

  onIngrediendAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
