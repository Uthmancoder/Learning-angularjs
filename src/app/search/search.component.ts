import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  // searchValue : string = '';

  // ChangeSearchValue(eventData : Event){
  //   // console.log((<HTMLInputElement>eventData.target).value)
  //    this.searchValue = (<HTMLInputElement>eventData.target).value
  // }

  enteredSarchValue : string = "";
  @Output()
  SearchedValue : EventEmitter<string> = new EventEmitter<string>();

  onSearchProduct(){
    this.SearchedValue.emit(this.enteredSarchValue)
  }
}
