import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  totalvehicle:any= [];
  constructor(private vehicle:VehiclesService){

this.vehicle.getvehicle().subscribe((data:any)=>{
  console.log(data)
  this.totalvehicle=data;
})



  }
}
