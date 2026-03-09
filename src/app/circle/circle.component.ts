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
}

paramitor(){
  this.result = 2*(this.num1 + this.num1)
}

}
