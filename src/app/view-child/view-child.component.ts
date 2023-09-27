import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChiltToParentComponent } from '../chilt-to-parent/chilt-to-parent.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css'],
})
export class ViewChildComponent {
  // viewchild operator assigns a property with a reference to an element in the  operating template
  @ViewChild('dobInput') dateofBirth: ElementRef | undefined;
  @ViewChild('ageInput') age: ElementRef | undefined;

  @ViewChild(ChiltToParentComponent, { static: true }) demoComp! :ChiltToParentComponent;

  caculateAge() {
    let birthYear = new Date(
      this.dateofBirth?.nativeElement.value,
    ).getFullYear();
    let currentYear = new Date().getFullYear();
    let userAge = currentYear - birthYear;
    this.age?.nativeElement.setAttribute("value", userAge.toString());


  }


}
