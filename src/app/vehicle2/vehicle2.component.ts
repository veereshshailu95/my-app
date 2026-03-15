import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicle2',
  templateUrl: './vehicle2.component.html',
  styleUrls: ['./vehicle2.component.css']
})
export class Vehicle2Component {
  term:string="";
  column:string="";
  order:string="";
  page:number=1;

  totalvehicle: any = [];

  constructor(private vehicle: VehiclesService) {
    // this.getVehiclesWithQueryParams();

    this.vehicle.getvehicle().subscribe(
      (data: any) => {
        console.log(data)
        this.totalvehicle = data;
      },
      (err: any)=>{
        alert("internal server error");
      }
    )
  }



  getVehiclesWithQueryParams(){
    this.vehicle.getVehiclesWithQueryParams(this.term,this.column,this.order,this.page).subscribe(
      (data:any)=>{
        this.totalvehicle=data;
      },
      (err:any)=>{
      alert("internal server error")
      }
    )
  }


  search(){
    this.getVehiclesWithQueryParams()
  }


  isAsc:boolean=false;
  sort(column:string){
    this.column=column;
    this.isAsc=!this.isAsc;
    this.order=this.isAsc?'asc':'desc';
    this.getVehiclesWithQueryParams();
  }

  pageVehicle(page:number){
    this.page=page;
    this.getVehiclesWithQueryParams();
  }


}


//constractor(prevet vehicle.vehicleServices){
//this.vehicle.getvehicle().subscribe(
//(data:any)=>{
//console.log(data);
//this.totalvehicle=data;

//},
//(err:any)=>{
//alert("interbal serviver error")
//}
//)
//}

