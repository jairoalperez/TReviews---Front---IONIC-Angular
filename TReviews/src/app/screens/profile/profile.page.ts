import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  resenas: Array<any> = [
    {autor: 'jairo', pelicula: 'avengers', contenido: 'esta pelicula es buenarda', fecha: '08/10/2022', puntaje: 10},
    {autor: 'axel', pelicula: 'avengers', contenido: 'verga pa mala', fecha: '08/12/2022', puntaje: 3},
    {autor: 'adnan', pelicula: 'avengers', contenido: 'masomenos', fecha: '08/12/2022', puntaje: 6},
    {autor: 'acurero', pelicula: 'avengers', contenido: 'estan raspados todos', fecha: '10/31/2022', puntaje: 1},
  ]

  constructor() { }

  ngOnInit() {
  }

}
