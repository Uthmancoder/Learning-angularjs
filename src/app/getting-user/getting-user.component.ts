import { Component } from '@angular/core';
import { newUserServices } from '../Services/newuser.service';

@Component({
  selector: 'app-getting-user',
  templateUrl: './getting-user.component.html',
  styleUrls: ['./getting-user.component.css'],
  providers: [newUserServices],
})
export class GettingUserComponent {
  constructor(private newUserService: newUserServices) {

  }
}
