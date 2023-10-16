import { Component, OnInit } from '@angular/core';
import { LoggerService } from './Services/logger.service';
import { UserService } from './Services/user.service';
import { Observable, Observer, of, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // so i wanted to move this provider to my app module so i can have acces to the class accross all of my components
  providers: [LoggerService, UserService],
})
export class AppComponent implements OnInit {
  title = 'My first angular class';
  message = 'Angular is one of the best javascript frameworks';

  constructor(
    private loggerService: LoggerService,
    private userService: UserService,
  ) {}

  // Creating an observable using Observable constructor
  // myObservable = new Observable((observer)=>{
  //    console.log("observable started");
  //    setTimeout(()=> {observer.next(1)}, 1000)
  //    setTimeout(()=> {observer.next(2)}, 2000)
  //    setTimeout(()=> {observer.next(3)}, 3000)
  //    setTimeout(()=> {observer.next(4)}, 4000)
  //   //  setTimeout(()=> {observer.error(new Error("something went wrong! please try again later"))}, 5000)
  //    setTimeout(()=> {observer.next(5)}, 6000)
  //    setTimeout(()=> {observer.complete()}, 7000)
  //   //  observer.next(1)
  //   //     observer.next(2)
  //   //     observer.next(3)
  //   //     observer.next(4)
  //   //     observer.next(5)
  // })

  // creating an observable using the create oprator
  myObservable = Observable.create((observer) => {
    setTimeout(() => {
      observer.next(1);
    }, 1000);
    setTimeout(() => {
      observer.next(2);
    }, 2000);
    setTimeout(() => {
      observer.next(3);
    }, 3000);
    setTimeout(() => {
      observer.next(4);
    }, 4000);
    // Uncomment the following lines to handle errors
    // setTimeout(() => {
    //   observer.error(new Error("Something went wrong! Please try again later"));
    // }, 5000);
    setTimeout(() => {
      observer.next(5);
    }, 6000);
    setTimeout(() => {
      observer.complete();
    }, 7000);
  });

  array1 = [1, 2, 3, 4, 5];
  array2 = ['a', 'b', 'c', 'd', 'e'];

  // using of operator to create an observable  of operator emits the iterable as it is it does not emit the iterable one by one
  // myObservable = of(this.array1, this.array2)

  // using from operator to perform an iterable
  // myObservable = from(this.array1)

  ngOnInit() {
    this.myObservable.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        alert(error.message);
      },
      () => {
        alert('Observable has completed emiting all values');
      },
    );
  }
}
