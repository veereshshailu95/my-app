import { Component } from '@angular/core';

@Component({
  selector: 'app-calculater',
  templateUrl: './calculater.component.html',
  styleUrls: ['./calculater.component.css']
})
export class CalculaterComponent {

  

    num1:number=0;
    num2:number=0;
    result:number=0;
  

    getresult(data:any){
      this.result=data;
    }
 
}
