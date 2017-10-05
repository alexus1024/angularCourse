import { UsersService } from '../shared/users.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  //@Input() users: string[];
  //@Output() userSetToActive = new EventEmitter<number>();
  users: string[];

  constructor(private usersService: UsersService){
    this.users = usersService.inactiveUsers;
  }


  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
  }
}
