import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private httpClient:HttpClient) { }
  getform(){
    return this.httpClient.get("https://dummyjson.com/products")

  }
}
