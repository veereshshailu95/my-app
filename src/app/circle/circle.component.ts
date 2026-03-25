import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {

num1: number=0;
result:number=0

Area(){
  this.result = Math.PI * (this.num1 * this.num1) 

// num1 = 7
// Area = 3.14 ( 7 × 7 ) = 153.86 

}

paramitor(){
  this.result = 2*(this.num1 + this.num1)
}

}
