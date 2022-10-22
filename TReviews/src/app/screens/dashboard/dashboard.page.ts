import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  movies = []
  IMG_URL = 'https://image.tmdb.org/t/p/w500'

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {

    this.http.get<any>('https://api.themoviedb.org/3/movie/popular?api_key=91355432bcd29434c686a0d24d0947fd')
    .subscribe(res => {
      this.movies = res.results;
      console.log('Conexion con TMDB');
    })

  }

}
