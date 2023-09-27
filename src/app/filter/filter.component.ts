import { Component, EventEmitter, Input, Output } from '@angular/core';
// inorder to use eventEmmiter we need to import it from angular core

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input() all: number = 0;
  @Input() phones: number = 0;
  @Input() Gadgets: number = 0;
  @Input() Electronics: number = 0;
  @Input() Watch: number = 0;

  selectedProductType: string = 'all';
  // to create a property and event, we need to use event emmiter,we also need to decorate it with @output decorator
  @Output()
  fileredProduct: EventEmitter<string> = new EventEmitter<string>();

  // creating a method to emit or raise this event

  onSelectorChange(){
    this.fileredProduct.emit(this.selectedProductType)
    // console.log(this.selectedProductType);

  }
}
