import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  constructor(
    private element: ElementRef,
    private rendrer: Renderer2,
  ) {}

  //  the set allows us to use a property like a method
  @Input("appClass") set display(value: object) {
    let entries = Object.entries(value);
    // using for of loop to loop through the entries

    // here we're using indexing to loop through the array
    // for(let entry of  entries){
    //   if(entry[1]){
    //     this.rendrer.addClass(this.element.nativeElement, entry[0])
    //   }
    // }

    //  i want to use destructuring to loop through the array
    for (let [className, Condition] of entries) {
      if (Condition) {
        this.rendrer.addClass(this.element.nativeElement, className);
      }
    }
  }
}
