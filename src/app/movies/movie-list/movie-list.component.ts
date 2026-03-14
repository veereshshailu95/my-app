import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  totalmovie:any=[]
    constructor(private movie:MovieService){
      this.movie.getmovie().subscribe((data:any) =>{
        console.log(data)
        this.totalmovie=data.data;
      })
    }
}
