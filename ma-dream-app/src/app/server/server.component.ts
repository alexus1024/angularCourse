import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-server',
    templateUrl: 'server.component.html',
    styles: [],
})
export class ServerComponent {
    constructor() {
        this.randomStatus();
    }

    randomStatus() {
        var rnd = Math.random();
        this.serverStatus = rnd > 0.5 ? "Online" : "Offline";
        setTimeout(() => { this.randomStatus(); }, 100)
    }


    @Input() serverId: number;
    serverStatus: string;


}

