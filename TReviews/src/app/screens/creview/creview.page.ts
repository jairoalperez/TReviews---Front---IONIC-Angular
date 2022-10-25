import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-creview',
  templateUrl: './creview.page.html',
  styleUrls: ['./creview.page.scss'],
})
export class CreviewPage implements OnInit {

  movieid: string
  API_KEY = '?api_key=91355432bcd29434c686a0d24d0947fd'
  URL_API = 'https://api.themoviedb.org/3/movie/'
  movie;

  ayudaa;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.movieid = this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get(this.URL_API+this.movieid+this.API_KEY)
      .subscribe(res => this.movie = res)
  }

  ayuda() {
    this.http.get('https://rottern-tomatos.herokuapp.com/buscar-nombre/jairito').subscribe(res => this.ayudaa = res)
  }

  createR(contenido, puntaje) {
    this.movieid = this.activatedRoute.snapshot.paramMap.get('id')
    this.http.post('https://rottern-tomatos.herokuapp.com/resena-crear', {
    id_usuario: 2,
    pelicula: this.movieid,
    contenido: contenido.value,
    fecha: '25/10/2022',
    puntaje: puntaje.value 
    }).subscribe(
      res => {
        console.log('registro exitoso')
      },
      err => {
        alert('Error al crear la review')
      }
    )

  }

}
