import { newUserServices } from './../Services/newuser.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css'],
})
export class AllusersComponent implements OnInit {

  constructor(private userService: newUserServices) { // Use a different name for the injected service

  }

  Users: { name: string, Job: string, gender: string, age: number, avatar: string, country: string }[] = [];

  ngOnInit(){
    this.Users = this.userService.users;
  }

  showDetails(user : { name: string, Job: string, gender: string, age: number, avatar: string, country: string }){
     this.userService.showUserDetails(user)
  }
}
