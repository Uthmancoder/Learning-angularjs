import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div [hidden]="displayNotification">
    <div
      class="alert alert-warning notification  d-flex align-items-center  justify-content-center "

    >
      <p class="mt-3">
        This website uses cookies to provide better user experience.
      </p>
      <div class="close mx-5">
        <button class="btn btn" (click)="CloseNotification()">&times;</button>
      </div>
    </div>
  </div> `,
  styles: [
    ' .notification{height : 50px!important}',
    'p{font-size :20px; font-weight: 700 }',
  ],
})
export class NotificationComponent {
  displayNotification: boolean = false;

  CloseNotification() {
    this.displayNotification = true;
  }
}
