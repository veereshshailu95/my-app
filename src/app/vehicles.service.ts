import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private httpvehicle:HttpClient) { }   //[it's apply the vehicles]
  getvehicle(){
    return this.httpvehicle.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction')
  }
}
