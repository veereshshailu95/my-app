import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private httpClient:HttpClient) { }   //[it's apply the vehicles]
  getvehicle(){
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?ass lo lo innalimit=10&page=1")  //[get ni vehicle ni API nunchi thisukodaniki use chestharu]
  }

  getvehicl(id:string):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id)  //[get ni vehicle ni API nunchi thisukodaniki use chestharu]
  }

  filtersVehicle(term:string):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term);     //[filter ante input lo search chesthe auto motiga vasthundhi]
  }

   pageVehicle(page:number):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page="+page);   //[100 pages unte 10 ga vidathisi okko dhanilo 10 pagese pettadaniki use chestharu ex:12345678910]
  }

  sortVehicle(column:string, order:string):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortby="+column+"&order="+order);   //[products or employees order lo ]
  }

  getVehiclesWithQueryParams(term:string,column:string, order:string,page:number):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term+"&sortby="+column+"&order="+order+"&limit=10&page="+page);   //[products or employees order lo ]
  }

  createVehicle(vehicle:any):Observable<any>{
    return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",vehicle);
  }

  deleteVehicle(id:string):Observable<any>{
    return this.httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }



}


//?filter=+term+"&sortby="+column+"&order="+order+"&limit=10&page="+page;
//constractor(prevate httpclient:HttpClient){ }
//getvehicle(){
//return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/")}
//