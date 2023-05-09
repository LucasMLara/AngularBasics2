import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe({
      name: 'Primeiro Produto',
      description: 'Descrição do primeiro Produto',
      imagePath:
        'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      ingredients: [new Ingredient({ name: 'Atum', amount: 2 })],
    }),
    new Recipe({
      name: 'Segundo Produto',
      description: 'Descrição do Segundo Produto',
      imagePath:
        'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      ingredients: [new Ingredient({ name: 'Salmão', amount: 2 })],
    }),
  ];

  constructor(private slService: ShoppinglistService) {}
  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  getRecipes() {
    // slice() retorna uma copia do array
    // return this.recipes.slice();,0
    return [...this.recipes];
  }
}
