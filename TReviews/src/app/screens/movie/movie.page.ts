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
  reviews: Array<any> = []
  promedio

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.movieid = this.activatedRoute.snapshot.paramMap.get('id')

    this.http.get(this.URL_API+this.movieid+this.API_KEY)
      .subscribe(res => this.movie = res)
    
      this.http.get<any>('https://rottern-tomatos.herokuapp.com/resena-peli/'+this.movieid)
      .subscribe(res => {
        this.reviews = res;
      })

      this.http.get('https://rottern-tomatos.herokuapp.com/promedio/'+this.movieid)
      .subscribe(res => {
        this.promedio = res;
      })
    
  }

}
