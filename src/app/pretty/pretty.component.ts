import { Component } from '@angular/core';
import { PrettyService } from '../pretty.service';

@Component({
  selector: 'app-pretty',
  templateUrl: './pretty.component.html',
  styleUrls: ['./pretty.component.css']
})
export class PrettyComponent {

      allprettys:any=[];
      constructor(private prettys:PrettyService){
      this.prettys.getprettys().subscribe((data:any)=>{
      console.log(data);
      this.allprettys=data;
      })
      
    }
   
}
