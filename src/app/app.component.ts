import { Component } from '@angular/core';
import { LoggerService } from './Services/logger.service';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // so i wanted to move this provider to my app module so i can have acces to the class accross all of my components
  providers : [LoggerService, UserService]
})
export class AppComponent {
  title = 'My first angular class';
  message = "Angular is one of the best javascript frameworks"

  constructor(private loggerService : LoggerService, private userService: UserService){

  }
}
