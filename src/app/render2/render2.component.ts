import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[app-render2]',
})
export class Render2Component {
  // whenever you use the private keyword angular creates a private property which makes the element avaiable or accesible outside of the constructor 
  constructor(
    private element: ElementRef,
    private rendrer: Renderer2,
  ) {
    this.rendrer = rendrer;
  }

  ngOnInit() {
    // rendrer2 takes 3 arguments, the first argument is the element to be modified, the second argumentis the style to be modified and the third argument is the value  to be setted
    this.rendrer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'green',
    );
    this.rendrer.addClass(this.element.nativeElement, "custom-class")
    // you can also set Attributes
    this.rendrer.setAttribute(this.element.nativeElement, "title", "This is a title setted by rendrer2")
  }
}
