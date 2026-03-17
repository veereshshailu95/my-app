import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {
  
  id:string="";
  studen:any={};
   constructor(private activated:ActivatedRoute,private studentService:StudentsService){
    activated.params.subscribe(
      (data:any)=>{
        this.id=data.id;
        studentService.getstuden(this.id).subscribe(
          (data:any)=>{
            this.studen=data
          }
        )
      }
    )
   }
}
