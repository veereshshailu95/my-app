import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {
  

    
   @Input() num1:number=0;
    @Input() num2:number=0;
 
    @Output() bEvent:EventEmitter<number>=new EventEmitter();
    sum(){
      const sum=Number(this.num1)+Number(this.num2);
      this.bEvent.emit(sum);
    }

    sub(){
      const sub=Number(this.num1)-Number(this.num2);
      this.bEvent.emit(sub);
    }
    
    mul(){
      const mul=Number(this.num1)*Number(this.num2);
      this.bEvent.emit(mul);
    }
    div(){
      const div=Number(this.num1)/Number(this.num2);
      this.bEvent.emit(div);
    }

}
