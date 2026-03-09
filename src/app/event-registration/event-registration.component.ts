import { Component } from '@angular/core';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent {

  name:string="";
  users:string[]=[];

  register(){
    this.users.push(this.name);
   }
   delete(i:number){
    this.users.splice(i,1);
   }

}
