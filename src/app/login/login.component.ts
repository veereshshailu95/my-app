import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


    loginForm:FormGroup=new FormGroup({
      username:new FormControl(),
      password:new FormControl(),
    })

    constructor(private loginService:LoginService,    private router:Router){}
    login(){
      this.loginService.login(this.loginForm.value,).subscribe(
        (data:any)=>{
          alert("login succssfully");
          // store token
          sessionStorage.setItem("accessToken",data.accessToken)
          //go to dashbord
          this.router.navigateByUrl("/dashboard")
        },
        (err:any)=>{
          alert("internal server error") 
        }
      )
    }



// loginForm:FormGroup= new FormGroup({
//   username.new FormControl(),
//   email:new FormControl(),
// })

// constructor(private loginService:LoginService, private router:Router){}
// login(){
//   this.loginService.login(this.loginForm.value).subscribe(
//     (data:any)=>{
//       alert("login successfully");
//       sessionStorage.setItem("accessToken",data.accessToken);
//       this.router.navigateByUrl("/dashboard")

//     },
//     (err:any)=>{
//       alert("internal error")
//     }
//   )
// }



}

