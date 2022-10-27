import { Component, OnInit } from '@angular/core';
import { LocaldService } from 'src/app/services/locald.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user;

  resenas: Array<any> = [
    {autor: 'jairo', pelicula: 'avengers', contenido: 'esta pelicula es buenarda', fecha: '08/10/2022', puntaje: 10},
    {autor: 'axel', pelicula: 'avengers', contenido: 'verga pa mala', fecha: '08/12/2022', puntaje: 3},
    {autor: 'adnan', pelicula: 'avengers', contenido: 'masomenos', fecha: '08/12/2022', puntaje: 6},
    {autor: 'acurero', pelicula: 'avengers', contenido: 'estan raspados todos', fecha: '10/31/2022', puntaje: 1},
  ]

  constructor(
    private localStore: LocaldService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    
    this.http.get('https://rottern-tomatos.herokuapp.com/buscar-nombre/'+this.localStore.getData('username'))
      .subscribe(res => {
        this.user = res;
      }
      )

  }

}
