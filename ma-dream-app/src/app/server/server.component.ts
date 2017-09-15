import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-server',
    templateUrl: 'server.component.html',
    styles: [],
})
export class ServerComponent {
    @Input() serverId: number;
    serverStatus: string = "Online"
}
