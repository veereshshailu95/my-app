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

this.vehicle.getvehicle().subscribe(
  (data:any)=>{
  console.log(data)
  this.totalvehicle=data;
})



  }
  term:string="";
  filterVehicle(){
    this.vehicle.filtersVehicle(this.term).subscribe(
      (data:any)=>{
       this.totalvehicle = data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
    
   pageVehicle(page:number){
    this.vehicle.pageVehicle(page).subscribe(
      (data:any)=>{
       this.totalvehicle = data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
   
  isAsc:boolean = false;
  sortVehicle(column:string){
    this.isAsc = !this.isAsc;
    this.vehicle.sortVehicle(column,this.isAsc?'asc':'desc').subscribe(
      (data:any)=>{
       this.totalvehicle = data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }



   deleteVehicle(id:string){
    this.vehicle.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("delete succefully!!!!");
        location.reload();
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
}
