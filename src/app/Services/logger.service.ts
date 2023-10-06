export class LoggerService{

  LogMessage(name : string, status : string){
    //  i want to inject the instance of the logger service class to the user service class
    console.log("A new user " + name +  " with status  " + status + " is added successfully ")
  }
}