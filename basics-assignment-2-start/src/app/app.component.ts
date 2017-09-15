import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    username: string = "";
    canLogin(): boolean {
        return !!this.username;
    }
    login() {
        this.username = "";
    }

}
