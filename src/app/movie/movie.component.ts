import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../models/movies.interface';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
constructor(){

}
@Input() movie:Movie | undefined;
@Input() borderStyle:number | undefined ;
@Input() inputIndex:number=0 ;
@Output() onDel:EventEmitter<number>=new EventEmitter();
public deleteMovie(){
  this.onDel.emit(this.inputIndex);
}
}
