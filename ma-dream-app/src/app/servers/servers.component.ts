import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    constructor() {
        
        
    }

    doStuff() {
        this.allowNewServer++;
        console.log(this.allowNewServer)
        setTimeout(() => { this.doStuff(); }, 1000)
    }

  ngOnInit() {
    }
  testProp: string = "hello";
  allowNewServer: number = -10;
  servers = [1,2,3,4,5,60]
}
