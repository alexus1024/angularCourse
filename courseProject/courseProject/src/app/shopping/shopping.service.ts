import { BehaviorSubject } from 'rxjs/Rx';
import { Ingridient } from '../shared/ingridient.model';

export class ShoppingService {

    ingridients: Ingridient[] = [
        { name: 'Соль', amount: 1 },
        { name: 'Сахар', amount: 3 }
    ];

    private selectedIngridient = new BehaviorSubject<Ingridient>(null);
    public selectedIngridient$ = this.selectedIngridient.asObservable();


    addItem(data: Ingridient) {
        this.ingridients.push(data);
        this.selectedIngridient.next(data);
    }
    removeItem(data: Ingridient): boolean {
        const i = this.ingridients.indexOf(data);
        if (i < 0) { return false; }
        this.ingridients.splice(i, 1);

        if (this.selectedIngridient.value === data) {
            this.selectedIngridient.next(null);
        }
    }

    select(ing: Ingridient) {
        this.selectedIngridient.next(ing);
    }
}
