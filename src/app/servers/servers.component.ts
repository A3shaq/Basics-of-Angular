import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // templateUrl: './servers.component.html',
  template: '<app-server> </app-server> <h2>Hello</h2>', // for multi line code use es6 template literals
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
