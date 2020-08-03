import { Ingredient } from '../shopping-list/ingredient.model';

export class Recipe {
	name:string; 
	description:string;
	ingredients:Ingredient[];
	img:string;

	constructor(name:string,description:string,ingredients:Ingredient[],img:string) {
		this.name= name;
		this.description = description; 
		this.ingredients = ingredients;
		this.img = img;
	}

}