import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[app-render2]',
})
export class Render2Component {
  constructor(
    private element: ElementRef,
    private rendrer: Renderer2,
  ) {
    this.rendrer = rendrer;
  }

  ngOnInit() {
    this.rendrer.setStyle(
      this.element.nativeElement,
      'backgroundColoe',
      'green',
    );
  }
}
