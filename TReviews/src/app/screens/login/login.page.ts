import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocaldService } from 'src/app/services/locald.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private http: HttpClient,
    private localStore: LocaldService
  ) { }

  ngOnInit() {
  }

  logIn(username, clave) {

    this.http.post('https://rottern-tomatos.herokuapp.com/login', {
    username: username.value,
    password: clave.value
    }).subscribe(
      res => {
        if (res == 1) {
          this.localStore.saveData('username', username.value)
          alert('Succesfully Loged')
          location.href = 'dashboard'

        } else {
          alert('Wrong Data')
        }
        
      },
      err => {
        alert('Error al crear la cuenta')
      }
    )

  }
 
}
