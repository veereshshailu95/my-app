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
  
// getvehicle(id:string):obseravable<any>{
// return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/+id")}




  filtersVehicle(term:string):Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(this.baseUrl+"?filter="+term);     //[filter ante input lo search chesthe auto motiga vasthundhi]
  }
  // filtersvehicle(term:string):obseravable<any>{
// return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term)
//}




   pageVehicle(page:number):Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(this.baseUrl+"?limit=10&page="+page);   //[100 pages unte 10 ga vidathisi okko dhanilo 10 pagese pettadaniki use chestharu ex:12345678910]
  }
  // pagevehicle(page:number):obseravable<any>{
// return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction+?limit=10&page="+page)
//}



  sortVehicle(column:string, order:string):Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(this.baseUrl+"?sortby="+column+"&order="+order);   //[products or employees order lo ]
  }

  // sortvehicle(column:string, order:string):obseravable<any>{
// return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction+"?sortby="+column+"&order="+order)
//}


  getVehiclesWithQueryParams(term:string,column:string, order:string,page:number):Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(this.baseUrl+"?filter="+term+"&sortby="+column+"&order="+order+"&limit=10&page="+page);   //[products or employees order lo ]
  }

  
  // getVehiclewithQueryParams(term:string,column:string, order:string,page:number):obseravable<any>{
// return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction+"?filter="+term+"&sortby="+column+"&order="+order+"&limit=10&page="+page)
//}



  createVehicle(vehicle:any):Observable<Vehicle>{
    return this.httpClient.put<Vehicle>(this.baseUrl+"",vehicle);
  }

// creatvehicle(vehicle:any):obseravable<any>{
// return this.httpclient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction+"",vehicle)}



  editVehicle(id:string,vehicle:any):Observable<Vehicle>{
    return this.httpClient.put<Vehicle>(this.baseUrl+"/"+id,vehicle);

  }

// editvehicle(id:string,vehicle:any):obseravable<any>{
// return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction+"/"+id,vehicle)}


  
  

  deleteVehicle(id:string):Observable<Vehicle>{
    return this.httpClient.delete<Vehicle>(this.baseUrl+"/"+id);
  }

   
// deletevehicle(id:string):obseravable<any>{
// return this.httpclient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"/"+id)}




}


//?filter=+term+"&sortby="+column+"&order="+order+"&limit=10&page="+page;
//  constractor(prevate httpclient:HttpClient){ }
// getvehicle(){
//  return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/")}
