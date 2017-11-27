import { Ingridient } from '../shared/ingridient.model';
export interface Recipe {
    id: number;
    name: string;
    description: string;
    imagePath: string;
    ingridients: Ingridient[];
}
