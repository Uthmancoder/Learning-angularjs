import { Component } from '@angular/core';

@Component({
  selector: 'app-chilt-to-parent',
  templateUrl: './chilt-to-parent.component.html',
  styleUrls: ['./chilt-to-parent.component.css']
})
export class ChiltToParentComponent {
   sayHello(){
       console.log("Hello from child Component")
   }
}
