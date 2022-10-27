import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
  }

  registerUser(username, bio, correo, nombre, contraseña, verificarclave) {

    console.log(username.value+' '+bio.value+' '+correo.value+' '+nombre.value+' '+contraseña.value+' '+verificarclave.value)

    /*this.http.post('https://rottern-tomatos.herokuapp.com/registro', {
    username: username.value,
    bio: bio.value,
    correo: correo.value,
    nombre: nombre.value,
    contraseña: contraseña.value,
    verificarclave: verificarclave.value
    }).subscribe(
      res => {
        alert('Registro exitoso')
        console.log(res)
      },
      err => {
        alert('Error al crear la cuenta')
      }
    )*/

  }

}
