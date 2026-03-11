import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NaukariService {

  constructor(private httpnaukari:HttpClient) { }
  getnaukari():Observable<any>{
    return this.httpnaukari.get('https://jsonfakery.com/jobs')

  }

}
