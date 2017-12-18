import { Recipe } from '../recipes/recipe.model';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Ingridient } from '../shared/ingridient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingService {

    lastId = 3;
    ingridients: {[key: number]: Ingridient} = {
        1: { name: 'Соль', amount: 1, id: 1 },
        2: { name: 'Сахар', amount: 3, id: 2 }
    };

    private selectedIngridient = new Subject<Ingridient>();
    public selectedIngridient$ = this.selectedIngridient.asObservable();


    addItem(data: Ingridient) {
        const innerObj = Object.assign({}, data);
        if (!data.id){
            this.lastId++;
            innerObj.id = this.lastId;
            this.ingridients[this.lastId] = innerObj;
        }

        this.selectedIngridient.next(innerObj);
    }
    removeItem(data: Ingridient): boolean {
        const i = i.id;
        if (i < 0) { return false; }
        this.ingridients.splice(i, 1);

       // if (this.selectedIngridient.value === data) {
       //     this.selectedIngridient.next(null);
       // }
    }

    select(ing: Ingridient) {
        this.selectedIngridient.next(ing);
    }

    addFromRecipe(r: Recipe) {
        // this.ingridients = this.ingridients.concat(r.ingridients);
        this.ingridients.push(...r.ingridients);
    }
}
