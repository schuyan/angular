import {Component, OnInit} from '@angular/core';
import {SocketService} from "./socket.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = environment.appTitle;

  messageCount = 0;

  constructor(private socketService: SocketService) {
  }

  ngOnInit() {
    this.socketService.createObservableSocket("ws://localhost:8081")
      .map(event => JSON.parse(event))
      .subscribe(
        event => this.messageCount = event.messageCount
      );
  }

}
