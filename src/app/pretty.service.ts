import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrettyService {

  constructor(private pretty:HttpClient) { }
  getprettys():Observable<any>{
    return this.pretty.get('https://fakestoreapi.com/products')
  }
}

