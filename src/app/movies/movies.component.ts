import { Component } from '@angular/core';
import { Movie } from '../models/movies.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  public listOfMovies:Movie[]=[
    {
      name: "iron man",
      mainChar:"tony stark",
      rating:6,
    },
    {
      name: "iron man",
      mainChar:"tony stark",
      rating:9,
    },
    {
      name: "iron man",
      mainChar:"tony stark",
      rating:8,
    }, {
      name: "iron man",
      mainChar:"tony stark",
      rating:7,
    },
    ]
    public deleteMovie(movieIndex:number):void{
      this.listOfMovies.splice(movieIndex,1)
    }
}
