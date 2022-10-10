import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: '<app-server> </app-server> <h2>Hello</h2>', // for multi line code use es6 template literals
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server Was Created!'
  serverName = 'Test'
  serverCreated = false
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }


  onServerCreated() {
    this.serverCreated = true;
    this.serverCreationStatus = this.serverCreationStatus === 'Server Was Created!' ? `No Server Was Created! Name is ${this.serverName}` : `Server Was Created! Name is ${this.serverName}`
  }

  onUpdateServerName(event: any) {
    console.log(event.target.value)
    // this.serverName = event.target.value
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
