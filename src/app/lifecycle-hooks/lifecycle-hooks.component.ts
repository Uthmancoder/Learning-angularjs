import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent {

  inputText : string = ""

  componentToBeDestroyed : boolean = true;

  onsubmit(inputValue : HTMLInputElement){
  this.inputText = inputValue.value
  }


  DestroyComponent(){
    this.componentToBeDestroyed = false;
  }



}
