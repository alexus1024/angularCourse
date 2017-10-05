import { Ingridient } from '../shared/ingridient.model';
export interface Recipe {
    name: string;
    description: string;
    imagePath: string;
    ingridients: Ingridient[];
}
