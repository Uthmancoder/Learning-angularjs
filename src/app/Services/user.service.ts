import { Injectable } from "@angular/core"
import { LoggerService } from "./logger.service"


@Injectable()
export class UserService {
  // using a special metadata for the angular dependency injection system

 
  constructor(private loggerService : LoggerService){

  }

   users = [
      {id : 1, name : "john", status : "active"},
      {id : 2, name : "Mark", status : "inactive"},
      {id : 3, name : "Uthman", status : "active"},
   ]

   AddNewUser(name : string, status : string){
    this.users.push({id : this.users.length + 1, name : name, status : status})
    this.loggerService.LogMessage(name, status)

    // i want to inject the instance of the logger service class to the adduser service class

   }
}