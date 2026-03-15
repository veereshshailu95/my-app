import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  term:string="";
  column:string="";
  order:string="";
  page:number=1;
   totalstudents:any=[];
  constructor(private student:StudentsService){
   
    this.student.getstudent().subscribe(
      (data:any)=>{
        console.log(data);
        this.totalstudents=data;
      }
    )
  }

  getStudentsWithQueryParams(){
    this.student.getStudentsWithQueryParams(this.term,this.column,this.order,this.page).subscribe(
      (data:any)=>{
        this.totalstudents=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

 
  sort(column:string,order:string){
    this.column= this.column;
    this.order= this.order;
    this.getStudentsWithQueryParams();
  }
  

 

  deleteaccount(id:string){
    this.student.deleteaccounts(id).subscribe(
      (data:any)=>{
        alert("delete succefully");
        location.reload();
      },
      (err:any)=>{
       alert("internal server error")
      }
    )
  }

  

 
  limit:number=5;

  pagestudent(page:number){
    this.page=page;
    this.getStudentsWithQueryParams();
  }



}
