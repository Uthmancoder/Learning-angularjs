import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element : ElementRef, private renderer : Renderer2) {

   }

  @Input() set  setStyle(styles: object){
  // the object.entries returns an array of key avalue pairs
   let entries =   Object.entries(styles)
   //looping through the array
   for(let entry of entries){
      this.renderer.setStyle(this.element.nativeElement, entry[0], entry[1] ) }
  }

}
