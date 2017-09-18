import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    isTunaVisible: boolean;
    log: ILogEntry[] = []
    static lastPos = 0;

    toggleTuna() {
        this.isTunaVisible = !this.isTunaVisible;
        var lastpos = ++AppComponent.lastPos;
        this.log.push({ Pos : lastpos, Time : new Date() });
    }


}

interface ILogEntry {
    Pos: number;
    Time: Date;
}
