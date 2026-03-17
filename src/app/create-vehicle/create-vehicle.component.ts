import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
     

  VehicleForm:FormGroup=new FormGroup({
      Vehicle:new FormControl(),
      manufacturer:new FormControl(),
      model:new FormControl(),
      type:new FormControl(),
      fuel: new FormControl(),
      color:new FormControl(),
      image:new FormControl(),
      cost:new FormControl(),
      tyres :new FormControl(),
      

  })
    id:string=""
  constructor(private vehicleService:VehiclesService, private activateRouter:ActivatedRoute){
    activateRouter.params.subscribe(
      (data:any)=>{
        this.id=data.id;
        vehicleService.getvehicl(data.id).subscribe(
          (data:any)=>{
            this.VehicleForm.patchValue(data);
          }
        )
      }
    )
  }
  

  submit(){
    if(this.id){
     //edit
      this.vehicleService.editVehicle(this.id,this.VehicleForm.value).subscribe(
      (data:any)=>{
        alert("vehicle edit succssfully");
        this.VehicleForm.reset();
      },
      (err:any)=>{
        alert("internal server error")
      }

    )
  }

     
    
    else{
    //creat
     this.vehicleService.editVehicle(this.id,this.VehicleForm.value).subscribe(
      (data:any)=>{
        alert("vehicle created succssfully");
        this.VehicleForm.reset();
      },
      (err:any)=>{
        alert("internal server error")
      }

    )
  }
  }
}
    // console.log(this.VehicleForm.value)
   



