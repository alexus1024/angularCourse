import { EventEmitter, Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UsersService {

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];


    updated = new EventEmitter<number>();

    constructor(private couner: CounterService) {
    }

    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);

        this.updated.emit(id);
        this.couner.inc();
    }

    onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);

        this.updated.emit(id);
        this.couner.inc();
    }
}