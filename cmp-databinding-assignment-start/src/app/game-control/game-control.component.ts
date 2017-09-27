import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  

  @Output() tick = new EventEmitter<number>();

  timer: NodeJS.Timer;
  counter = 0;

  constructor() { }

  
  ngOnInit() {
    
  }

  onTimer() {    
    console.log('tick', this.counter);
    this.tick.emit(++this.counter);

  }

  onStart() {
    console.log('start', this.counter);
    this.timer = setInterval(() => this.onTimer(), 1000, this);
  }

  onStop() {
    console.log('stop', this.counter);
    clearInterval(this.timer);

  }

}
