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

  isAsc:boolean=false;
  sort(column:string){
    this.column=this.column;
    this.isAsc=!this.isAsc;
    this.order=this.isAsc?'asc':'desc';
    this.getStudentsWithQueryParams();
  }

  sorte(){
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

}
