import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent {

  height:number=0;
  weight:number=0;
  result:number=0;
  abc:any;

  calculator(){
    this.result=this.weight/((this.height/100)*(this.height/100))

    if(this.result>=18.5 ){
      this.abc("under weight")

    }
    else if(this.result>18.5 && this.result<=24.9){
      this.abc("normal")

    }
    else if(this.result>24.9 && this.result<=29.9){
      this.abc("over weight")

    }
    else if(this.result>29.9 && this.result<=34.9){
       this.abc("obse")
    }
    else{
      this.abc("extrimily obse")
    }
  }
 
  


       // [BMI = 20 / (0.2 × 0.2)
       // BMI = 20 / 0.04
       // BMI = 500]

       //5cm => 5 / 100 = 0.05 m
       //0.05 × 0.05 = 0.0025
       //BMI = 5 / 0.0025
       //BMI = 2000




}
