import { Component, OnInit } from '@angular/core';
import { newUserServices } from '../Services/newuser.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService : newUserServices){}

   user! : { name: string, Job: string, gender: string, age: number, avatar: string, country: string };

   ngOnInit() {
    this.userService.onshowDetailsClicked.subscribe((data: { name: string, Job: string, gender: string, age: number, avatar: string, country: string }) => {
      this.user = data;
    });
  }
  
  }

