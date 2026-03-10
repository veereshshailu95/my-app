import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
      manymails:any=[];
      constructor(private mail:MailService){
      this.mail.getMail().subscribe((data:any)=>{
      console.log(data)
      this.manymails=data
      
     })
    }

    letmail(content:any){
          if(content.completed== false){
          return 'grey';
        }else {
          return 'black';
        }
      }
     
}

