import { Injectable } from '@angular/core';
import { Review } from 'src/app/models/review';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  reviewData: Review = {
    id_usuario: '',
    pelicula: '',
    contenido: '',
    fecha: '',
    puntaje: '' 
  }

  constructor(private http: HttpClient) { }

  createReview(review: Review) {
    this.http.post('https://rottern-tomatos.herokuapp.com/resena-crear', {
    id_usuario: review.id_usuario,
    pelicula: review.pelicula,
    contenido: review.contenido,
    fecha: review.fecha,
    puntaje: review.puntaje 
    })
  }

}
