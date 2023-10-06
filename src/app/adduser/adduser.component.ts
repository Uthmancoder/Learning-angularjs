import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  name: string = "";
  status : string = "active";

  constructor( public userService : UserService ){
    
  }

  AddUser(){
    this.userService.AddNewUser(this.name, this.status)
  }

}
