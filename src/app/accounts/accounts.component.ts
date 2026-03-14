import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {

  totalaccounts:any=[];

  constructor(private account: AccountsService){
  this.account.getaccounts().subscribe((data:any)=>{
    console.log(data)
    this.totalaccounts=data;
  })
  }

   
  term:string="";
  filteraccount(){
    this.account.filteraccounts(this.term).subscribe(
      (data:any)=>{
        this.totalaccounts=data;
      },
      (err:any)=>{
       alert("internal server error")
      }
    )
  }


  
  isAsc:boolean = false;
  sortaccount(column:string){
    this.isAsc = !this.isAsc;
    this.account.sortaccounts(column,this.isAsc?'asc':'desc').subscribe(
      (data:any)=>{
       this.totalaccounts = data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
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
}


