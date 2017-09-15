import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: 'servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    constructor() {


    }

    addServer() {
        var id = Math.round(Math.random() * 100)
        this.servers.push(id)
    }

    ngOnInit() {
    }
    testProp: string = "hello";
    allowNewServer: number = -10;
    servers = [1, 20, 7, 35, 47]
}
