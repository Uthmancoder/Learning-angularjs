//  when you create a component you'd decorate it with @component decorator and when you create a directive you'd decorate it with @directive decorator
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[setbackground]',
})


export class SetbackgroundDirective implements OnInit {

  constructor(private element: ElementRef) {
    // element.nativeElement.style.backgroundColor = 'gray';
    this.element = element
  }

  ngOnInit(){
    this.element.nativeElement.style.backgroundColor = 'blue';
  }
}
