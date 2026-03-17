import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiclesService } from '../vehicles.service';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-creat-student',
  templateUrl: './creat-student.component.html',
  styleUrls: ['./creat-student.component.css']
})
export class CreatStudentComponent {


  studentForm:FormGroup=new FormGroup({
        name:new FormControl(),
        city:new FormControl(),
        phone:new FormControl(),  
        email:new FormControl(),
        dob:new FormControl(),
        profile_picture:new FormControl()
  })
        
  


  id:string="";

   constructor(private studentService:StudentsService, private activateRouter:ActivatedRoute,private route:Router){
  activateRouter.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
        this.studentService.getstuden(data.id).subscribe(
          (data:any)=>{
            this.studentForm.patchValue(data);
          }
        )

      }
    )
}


submit(){
 if(this.id){
  this.studentService.editStudent(this.id,this.studentForm.value).subscribe(
      (data:any)=>{
        alert("student edit succssfully");
        this.studentForm.reset();
        this.route.navigateByUrl("/dashboard/students");
      },
      (err:any)=>{
        alert("internal server error")
      }
  )
 }
 else{
   //creat
     this.studentService.editStudent(this.id,this.studentForm.value).subscribe(
      (data:any)=>{
        alert("student created succssfully");
        this.studentForm.reset();
      },
      (err:any)=>{
        alert("internal server error")
      }

    )
  }

 }
}


