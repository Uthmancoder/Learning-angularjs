import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-javascript-component',
  templateUrl: './javascript-component.component.html',
  styleUrls: ['./javascript-component.component.css'],
  // providers : [EnrollService]
})
export class JavascriptComponentComponent {
title = "JavaScript"

// to craete an instance you need to have a constructor
constructor(private enrollService : EnrollService){

}

OnEnroll(){
  // Instead of creating this instance on my own i want angular to create an instance of this service class and inject it into this component class

    // i.e this is creating instance myself   //const enrollService =  new EnrollService();

    this.enrollService.OnEnrollClikced(this.title)
  }
}
