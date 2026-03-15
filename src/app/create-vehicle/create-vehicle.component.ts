import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
     

  VehicleForm:FormGroup=new FormGroup({
      vehicle:new FormControl(),
      manufacture:new FormControl(),
      model:new FormControl(),
      type:new FormControl(),
      fuel: new FormControl(),
      color:new FormControl(),
      cost:new FormControl(),
      tyres:new FormControl(),
      

  })
    
  constructor(private vehicleService:VehiclesService){}

  submit(){
    console.log(this.VehicleForm.value)
    this.vehicleService.createVehicle(this.VehicleForm.value).subscribe(
      (data:any)=>{
        alert("vehicle creat succssfully");
        this.VehicleForm.reset();
      },
      (err:any)=>{
        alert("internal server error")
      }

    )
  }


}
