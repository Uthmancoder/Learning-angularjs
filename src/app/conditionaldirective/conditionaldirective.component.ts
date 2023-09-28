import { Component } from '@angular/core';

@Component({
  selector: 'app-conditionaldirective',
  templateUrl: './conditionaldirective.component.html',
  styleUrls: ['./conditionaldirective.component.css']
})
export class ConditionaldirectiveComponent {
  Videos = [
    { title: "My Video 1", likes: 257, share: 415, dislike: 20, views: 1000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR52fGtjbhgi-QDffjJKMCvbPcigD6TwfvQXA&usqp=CAU" },
    { title: "My Video 2", likes: 397, share: 115, dislike: 12, views: 1000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR91K95ZWwOavk00WjMa8GjFEZEa4EEYKqXYA&usqp=CAU" },
    { title: "My Video 3", likes: 207, share: 45, dislike: 91, views: 1000, image: "https://v.etsystatic.com/video/upload/q_auto/Neon_Zoom_1_vlfndy.jpg" }
  ]

   mostLikedVideo = this.getLikedVideos();

   getLikedVideos(){
    // expandinding the videos indide of the videocopy
    let videoCopy =  [...this.Videos];
// sorting the array in descending order
  return  videoCopy.sort((current, next ) => next.likes - current.likes)[0];
}
}
