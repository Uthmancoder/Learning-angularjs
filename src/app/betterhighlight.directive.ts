import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective {

  constructor(private element : ElementRef , private rendrer : Renderer2) {

   }

   @HostBinding("style.backgroundColor") background : string = "pink";
   @HostBinding("style.transition") transition : string = "1s";
   @HostBinding("style.border") border : string = "none";

   @HostListener("mouseenter") mouseOver(){
    this.background = "HotPink"; 
    this.border = "red solid 2px"; 
   }
   @HostListener("mouseleave") mouseOut(){
    this.background = "pink"
    this.border = "none"; 
   }

}
