import { Ingredient } from '../shared/ingredient.model';

interface IRecipeparams {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];
}
export class Recipe implements IRecipeparams {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(params: IRecipeparams) {
    this.name = params.name;
    this.description = params.description;
    this.imagePath = params.imagePath;
    this.ingredients = params.ingredients;
  }
}
