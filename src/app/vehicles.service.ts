import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"

  constructor(private httpClient:HttpClient) { }   //[it's apply the vehicles]
  getvehicle():Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(this.baseUrl+"?ass lo lo innalimit=10&page=1")  //[get ni vehicle ni API nunchi thisukodaniki use chestharu]
  }

  getvehicl(id:string):Observable<Vehicle>{
    return this.httpClient.get<Vehicle>(this.baseUrl+"/"+id)  //[get ni vehicle ni API nunchi thisukodaniki use chestharu]
  }

  filtersVehicle(term:string):Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(this.baseUrl+"?filter="+term);     //[filter ante input lo search chesthe auto motiga vasthundhi]
  }

   pageVehicle(page:number):Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(this.baseUrl+"?limit=10&page="+page);   //[100 pages unte 10 ga vidathisi okko dhanilo 10 pagese pettadaniki use chestharu ex:12345678910]
  }

  sortVehicle(column:string, order:string):Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(this.baseUrl+"?sortby="+column+"&order="+order);   //[products or employees order lo ]
  }

  getVehiclesWithQueryParams(term:string,column:string, order:string,page:number):Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(this.baseUrl+"?filter="+term+"&sortby="+column+"&order="+order+"&limit=10&page="+page);   //[products or employees order lo ]
  }

  createVehicle(vehicle:any):Observable<Vehicle>{
    return this.httpClient.put<Vehicle>(this.baseUrl+"",vehicle);
  }


  editVehicle(id:string,vehicle:any):Observable<Vehicle>{
    return this.httpClient.put<Vehicle>(this.baseUrl+"/"+id,vehicle);
  }
  

  deleteVehicle(id:string):Observable<Vehicle>{
    return this.httpClient.delete<Vehicle>(this.baseUrl+"/"+id);
  }



}


//?filter=+term+"&sortby="+column+"&order="+order+"&limit=10&page="+page;
//constractor(prevate httpclient:HttpClient){ }
//getvehicle(){
//return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/")}
//