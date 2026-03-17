import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.css']
})
export class ViewVehicleComponent {

  id:string="";
  vehicl:any={};

   constructor(private activatedRoute:ActivatedRoute , private vehiclService:VehiclesService){
      activatedRoute.params.subscribe(
        (data:any)=>{
          this.id=data.id;
       
          vehiclService.getvehicl(data.id).subscribe(
          (data:any)=>{
            this.vehicl=data;
          }
          )

        }
      )
   }
}
