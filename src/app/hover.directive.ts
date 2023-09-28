import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element : ElementRef, private renderer : Renderer2) { 
    this.element = element;
  }

  // the hostlistner is used to listen to events on the hostelement i.e the element on which the directive is applied on
  @HostListener("mouseenter") onMouseOver(){ 
    this.renderer.setStyle(this.element.nativeElement, "margin", "10px 10px ")
    this.renderer.setStyle(this.element.nativeElement, "padding", "30px 30px!important") 
    this.renderer.setStyle(this.element.nativeElement, "transition", "1s")
  }
  @HostListener("mouseleave") onMouseOut(){ 
    this.renderer.setStyle(this.element.nativeElement, "margin", "5px 0px ")
    this.renderer.setStyle(this.element.nativeElement, "padding", "10px 20px") 
    this.renderer.setStyle(this.element.nativeElement, "transition", "0.5s")
  }
}
