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
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }


  onServerCreated() {
    this.serverCreationStatus = this.serverCreationStatus ==='Server Was Created!' ? 'No Server Was Created!': 'Server Was Created!'
  }

}
