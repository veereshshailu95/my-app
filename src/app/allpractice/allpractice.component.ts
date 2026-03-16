import { Component } from '@angular/core';
import { AllpracticeService } from '../allpractice.service';

@Component({
  selector: 'app-allpractice',
  templateUrl: './allpractice.component.html',
  styleUrls: ['./allpractice.component.css']
})
export class AllpracticeComponent {
  term:string=""
  column:string="";
  order:string="";
     
    totalallpractice:any=[];
   constructor(private allpractice:AllpracticeService){
     this.allpractice.getallpractice().subscribe(
      (data:any)=>{
        console.log(data);
        this.totalallpractice=data;
      }
     )
   }

   deleteallpractice(id:string){
       this.allpractice.deleteallpractice(id).subscribe(
        (data:any)=>{
          alert("delete succssfully");
          location.reload();
        },
        (err:any)=>{
          alert("internal server error")
        }
       )
   }


 
   
   
  isAsc:boolean = false;
  sortallpractice(column:string){
    this.isAsc = !this.isAsc;
    this.allpractice.sortallpractice(column,this.isAsc?'asc':'desc').subscribe(
      (data:any)=>{
       this.totalallpractice= data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
}
