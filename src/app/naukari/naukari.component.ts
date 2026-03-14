import { Component } from '@angular/core';
import { NaukariService } from '../naukari.service';

@Component({
  selector: 'app-naukari',
  templateUrl: './naukari.component.html',
  styleUrls: ['./naukari.component.css']
})
export class NaukariComponent {
  
    totalnaukari:any=[];
    constructor(private naukari:NaukariService){
    this.naukari.getnaukari().subscribe((data:any) =>{
      console.log(data);
      this.totalnaukari=data;
    })
   }
}
