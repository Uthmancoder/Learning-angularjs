import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-angula-component',
  templateUrl: './angula-component.component.html',
  styleUrls: ['./angula-component.component.css'],
  // the providers array is used to register the service class with the angular dependency injection system
  // providers : [EnrollService]
})
export class AngulaComponentComponent {
   title = "Angular";

   constructor(private enrollSevice : EnrollService){

   }

  OnEnroll(){
  // creating an instance of the service class which is not the proper way of creating an instance of a service class

    //  const enrollSevice  = new EnrollService();

     this.enrollSevice.OnEnrollClikced(this.title)
  }
}
