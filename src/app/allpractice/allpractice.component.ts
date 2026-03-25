import { Component } from '@angular/core';

@Component({
  selector: 'app-allpractice',
  templateUrl:'./allpractice.component.html',
  styleUrls: ['./allpractice.component.css']
})
export class AllpracticeComponent {
  // term:string=""
  // column:string="";
  // order:string="";
     
  //   totalallpractice:any=[];
  //  constructor(private allpractice:AllpracticeService){
  //    this.allpractice.getallpractice().subscribe(
  //     (data:any)=>{
  //       console.log(data);
  //       this.totalallpractice=data;
  //     }
  //    )
  //  }

  //  deleteallpractice(id:string){
  //      this.allpractice.deleteallpractice(id).subscribe(
  //       (data:any)=>{
  //         alert("delete succssfully");
  //         location.reload();
  //       },
  //       (err:any)=>{
  //         alert("internal server error")
  //       }
  //      )
  //  }


 
   
   
  // isAsc:boolean = false;
  // sortallpractice(column:string){
  //   this.isAsc = !this.isAsc;
  //   this.allpractice.sortallpractice(column,this.isAsc?'asc':'desc').subscribe(
  //     (data:any)=>{
  //      this.totalallpractice= data;
  //     },
  //     (err:any)=>{
  //       alert("internal server error")
  //     }
  //   )
  // }

  // num1:number=0;
  // num2:number=0;
  // result:number=0;

  // sum(){
  //   this.result=this.num1+this.num2;
  // }
  // sub(){
  //   this.result=this.num1-this.num2;
  // }
  // mul(){
  //   this.result=this.num1*this.num2;

  // }
  // div(){
  //   this.result=this.num1/this.num2;
  // }

  // num1:number=0;
  // num2:number=0;
  // result:number=1;

  // sum(){
  //   this.result=this.num1+this.num2;
  // }
  // sub(){
  //   this.result=this.num1-this.num2;
  // }
  // mul(){
  //   this.result=this.num1*this.num2;
  // }
  // div(){
  //   this.result=this.num1/this.num2;
  // }

num1:number=0;
num2:number=0;
result:number=0;


Area(){
  this.result = this.num1 * this.num2
  
}

paramitor(){
  this.result=2*(this.num1+this.num2)
}



  


}
