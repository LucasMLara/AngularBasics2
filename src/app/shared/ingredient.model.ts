interface IIngredientParams {
  name: string;
  amount: number;
}

export class Ingredient implements IIngredientParams {
  public name: string;
  public amount: number;

  constructor(params: IIngredientParams) {
    this.name = params.name;
    this.amount = params.amount;
  }
}
