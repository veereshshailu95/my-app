import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpmovie:HttpClient) { }
    getmovie():Observable<any>{
      return this.httpmovie.get("https://jsonfakery.com/movies/paginated")
    }
}
