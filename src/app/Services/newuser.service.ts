import { EventEmitter } from "@angular/core";

export class newUserServices {
  users = [
    { name: "Uthman", Job: "Developer", gender: "male", age: 20, avatar: "../../assets/uthman.jpg", country: "Nigeria" },
    { name: "John", Job: "Data Scientist", gender: "male", age: 22, avatar: "https://www.sas.com/en_us/insights/analytics/what-is-a-data-scientist/_jcr_content/socialShareImage.img.291feefa19f74863a50c12b567b69fc2.png", country: "USA" },
    { name: "Riya", Job: "Graphics Designer", gender: "female", age: 23, avatar: "https://365datascience.com/resources/blog/1f47g3l4ey7-entry-level-data-scientist.jpg", country: "India" },
    { name: "Alfred", Job: "Teacher", gender: "male", age: 27, avatar: "https://datalab.com.ng/wp-content/uploads/2023/03/What-Does-a-Data-Scientist-Do-1024x598.png", country: "Ghana" },
  ];

  // created a method 
  onshowDetailsClicked = new EventEmitter<{ name: string, Job: string, gender: string, age: number, avatar: string, country: string }>();

  // raising the method created 
  showUserDetails(user:  { name: string, Job: string, gender: string, age: number, avatar: string, country: string }){
    this.onshowDetailsClicked.emit(user)
    // the method raised is the called on the alluser component
  }
}
