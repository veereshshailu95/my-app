import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-view-accounts',
  templateUrl: './view-accounts.component.html',
  styleUrls: ['./view-accounts.component.css']
})
export class ViewAccountsComponent {

  id:string="";
  accountForm:any = {} ;
  
  constructor(private activatedRoute:ActivatedRoute, private accountService:AccountsService){
     activatedRoute.params.subscribe(
      (data:any)=>{
        this.id=data.id;
      
        accountService.getaccount(data.id).subscribe(
          (data:any)=>{
            this.accountForm=data;
          }
        )

      }
     )
  }

  submit(){
    
  }
}
