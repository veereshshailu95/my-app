import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  totalweather:any=[];
    constructor(private weather:WeatherService){
      this.weather.getweather().subscribe((data:any) =>{
        console.log(data)
        this.totalweather=data;
      })
    }
}
