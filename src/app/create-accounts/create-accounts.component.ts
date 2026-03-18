import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-accounts',
  templateUrl: './create-accounts.component.html',
  styleUrls: ['./create-accounts.component.css']
})
export class CreateAccountsComponent {

accountForm:FormGroup=new FormGroup({
  account_name:new FormControl(),
  available_balance: new FormControl(),
  account_number:new FormControl(),
  city:new FormControl(),
  profie_picture:new FormControl(),
  ifsc_code:new FormControl(),
  id:new FormControl()
})



  id:string="";
   constructor(private accountService:AccountsService, private activatedRoute:ActivatedRoute, private route:Router){
    activatedRoute.params.subscribe(
      (data:any)=>{
        this.id=data.id;
        accountService.getaccount(data.id).subscribe(
          (data:any)=>{
             this.accountForm.patchValue(data);
          }
        )
      }
    )
   }



   submit(){
    if(this.id){
    //edit
    this.accountService.getaccoun(this.id,this.accountForm.value).subscribe(
      (data:any)=>{
        alert("account edited successfully");
         this.accountForm.reset();
        this.route.navigateByUrl("/dashboard/accounts");
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
    }
   
   else{
   //creat
   this.accountService.getaccoun(this.id,this.accountForm.value).subscribe(
    (data:any)=>{
      alert("account created successfully");
       this.accountForm.reset();
       this.route.navigateByUrl("/dashboard/students");
    },
    (err:any)=>{
      alert("internal server error")
    }
   )
   }
  }
}
