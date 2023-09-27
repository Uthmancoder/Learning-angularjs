import { Component, ContentChild, ElementRef, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-content-child-demo',
  templateUrl: './content-child-demo.component.html',
  styleUrls: ['./content-child-demo.component.css']
})
export class ContentChildDemoComponent implements OnInit, AfterContentInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {

    console.log(this.ParagraphEl.nativeElement.textContent);
  }

  ngAfterContentInit() {
    this.ParagraphEl.nativeElement.textContent = "This is uthmancoder"
    console.log(this.ParagraphEl.nativeElement.textContent);
  }

  @ContentChild('paragraph') ParagraphEl!: ElementRef;
}

