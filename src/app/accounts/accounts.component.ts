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
}
