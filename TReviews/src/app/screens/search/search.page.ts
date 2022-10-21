import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  movies = []
  IMG_URL = 'https://image.tmdb.org/t/p/w500'

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  searchMovie(word) {
    console.log(word.value)
    this.http.get<any>('https://api.themoviedb.org/3/search/movie?api_key=91355432bcd29434c686a0d24d0947fd&query='+word.value)
    .subscribe(res => {
      this.movies = res.results;
      console.log(res)
      console.log('Conexion con TMDB');
    })
  }

}
