import { UsersService } from '../shared/users.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {

  users: string[];

  constructor(private usersService: UsersService){
    this.users = usersService.activeUsers;
  }
    

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }
}
