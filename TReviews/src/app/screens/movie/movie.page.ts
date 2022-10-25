import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  movieid: string
  API_KEY = '?api_key=91355432bcd29434c686a0d24d0947fd'
  URL_API = 'https://api.themoviedb.org/3/movie/'
  IMG_URL = 'https://image.tmdb.org/t/p/w500'
  movie;

  resenas: Array<any> = [
    {autor: 'jairo', pelicula: 'avengers', contenido: 'esta pelicula es buenarda', fecha: '08/10/2022', puntaje: 10},
    {autor: 'axel', pelicula: 'avengers', contenido: 'verga pa mala', fecha: '08/12/2022', puntaje: 3},
    {autor: 'adnan', pelicula: 'avengers', contenido: 'masomenos', fecha: '08/12/2022', puntaje: 6},
    {autor: 'acurero', pelicula: 'avengers', contenido: 'estan raspados todos', fecha: '10/31/2022', puntaje: 1},
  ]

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.movieid = this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get(this.URL_API+this.movieid+this.API_KEY)
      .subscribe(res => this.movie = res)
    
  }

  

}
