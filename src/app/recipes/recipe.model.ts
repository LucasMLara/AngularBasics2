interface IRecipeparams {
  name: string;
  description: string;
  imagePath: string;
}
export class Recipe implements IRecipeparams {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(params: IRecipeparams) {
    this.name = params.name;
    this.description = params.description;
    this.imagePath = params.imagePath;
  }
}
