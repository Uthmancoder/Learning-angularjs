import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element : ElementRef, private  rendrer : Renderer2) {

   }
  //  i used this setter because i wanted to use this property as a method
   @Input() set appHighlight(condition : boolean){
    if (condition) {
  this.rendrer.addClass(this.element.nativeElement, "highlight")
    }
   }

}
