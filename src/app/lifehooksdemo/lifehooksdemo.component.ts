import { Component, Input, OnInit , OnChanges, SimpleChanges, DoCheck,AfterViewChecked, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-lifehooksdemo',
  templateUrl: './lifehooksdemo.component.html',
  styleUrls: ['./lifehooksdemo.component.css']
})
export class LifehooksdemoComponent implements   OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

 @Input()enteredText : string = "ProAcademy";


 componentToBeDestroyed: boolean = true;

 constructor(){
  console.log("Constructor Called")
  console.log(this.enteredText);

}

// this is the only lifecycle that takexs an argument,and it's called whenever there is a change in the component
ngOnChanges(change : SimpleChanges){
  console.log("ngOnChanges Called");
  console.log(this.enteredText);
}

// ngOninit hooks get called only once when the component is initialized
ngOnInit(){
  //  console.log("ngOnInit Called")
   console.log(this.enteredText);
}

// ngDocheck hooks get called  whenever there is a new change in the component
ngDoCheck(){
console.log("ngDocheck is called")
}

// this method is called when the projected component is fully initialized
ngAfterContentInit(){
    console.log("ngAfterContentInit is called")
}

// this method i called for each change detection in the projectted component
ngAfterContentChecked(){
  console.log("ngAfterContentChecked is Checked")
}

// this method get's called when all the components view and all the child view are fully initializes
ngAfterViewInit(){
  console.log("ngAfterViewInit is called");
}
// this method get's called for each change detection cycle
ngAfterViewChecked(){
  console.log("ngAfterViewChecked is called");
}
// this method get's called bfore the component or the directive get destroyed
ngOnDestroy(){
  console.log("ngAfterViewChecked is called");
}



}
