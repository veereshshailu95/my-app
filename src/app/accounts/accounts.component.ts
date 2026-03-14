import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {


   
    term:string="";
    column:string="";
    order:string="";
    page:number=1;

  totalaccounts:any=[];

  constructor(private account: AccountsService){
  this.account.getaccounts().subscribe(
    (data:any)=>{
    console.log(data)
    this.totalaccounts=data;
  }
 )
  }

   

  search(){
    this.getaccountWithQueryParams()
  }


  
   getaccountWithQueryParams(){
    this.account.getaccountWithQueryParams(this.term,this.column,this.order,this.page).subscribe(
      (data:any)=>{
        this.totalaccounts=data;
      },
      (err:any)=>{
      alert("internal server error")
      }
    )
  }

  
  isAsc:boolean=false;
  sort(column:string){
    this.column=column;
    this.isAsc=!this.isAsc;
    this.order=this.isAsc?'asc':'desc';
    this.getaccountWithQueryParams();
  }
  

  
    deleteaccount(id:string){
    this.account.deleteaccount(id).subscribe(
      (data:any)=>{
        this.account = data;
        alert("successfully delete !!!!")
        location.reload();
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }


  
  pageaccount(page:number){
    this.page=page;
    this.getaccountWithQueryParams();
  }

}


