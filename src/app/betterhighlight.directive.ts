import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective {

  constructor(private element : ElementRef , private rendrer : Renderer2) {

   }

  //  created a property and using the property created  on the hostlistner
  // and also i want to bind this defaultcolor property to my viewTemplate so i use @input decorator
  @Input("appBetterhighlight") defaultColor : string = "pink"
   @Input() HoveredColor : string = "HotPink"
  @Input() title: string = "Better Highlight Directive"

   ngOnInit(){
    this.background = this.defaultColor;
   }

   @HostBinding("style.backgroundColor") background : string = this.defaultColor;
   @HostBinding("style.transition") transition : string = "1s";
   @HostBinding("style.border") border : string = "none";

   @HostListener("mouseenter") mouseOver(){
    this.background = this.HoveredColor;
    this.border = "red solid 2px";
   }
   @HostListener("mouseleave") mouseOut(){
    this.background = this.defaultColor;
    this.border = "none";
   }

}
