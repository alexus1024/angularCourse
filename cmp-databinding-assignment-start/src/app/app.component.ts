import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  gameElements: boolean[] = [];
  onGameTick(counter: number) {
    this.gameElements.push(!!(counter % 2));
  }

}
