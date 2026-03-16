import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllpracticeService {

  constructor(private httpallpractice:HttpClient) { }
  getallpractice(){
    return this.httpallpractice.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction")
  }

  deleteallpractice(id:string):Observable<any>{
    return this.httpallpractice.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id)
  }
  sortallpractice(column:string,order:string):Observable<any>{
    return this.httpallpractice.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortby="+column+"&order="+order)
  }

  // deleteVehicle(id:string):Observable<any>{
  //   return this.httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  // }

  
  }
  

