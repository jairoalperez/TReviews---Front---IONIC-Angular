import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocaldService } from 'src/app/services/locald.service';

@Component({
  selector: 'app-editp',
  templateUrl: './editp.page.html',
  styleUrls: ['./editp.page.scss'],
})
export class EditpPage implements OnInit {

  user;
  udata;
  idu;


  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private localStore: LocaldService
    ) { }

  ngOnInit() {

    this.http.get('https://rottern-tomatos.herokuapp.com/buscar-nombre/'+this.localStore.getData('username'))
      .subscribe(res => {
        this.user = res;
        this.udata = this.user.find(udata => udata.username = this.localStore.getData('username'))
        this.idu = this.udata.id_usuario
        //this.localStore.saveData('iduser', idu)
        //console.log(this.localStore.getData('username')+' '+this.localStore.getData('iduser'))
      }
      )
  }

  editUser(username, bio, correo, nombre, clave) {

    this.http.put('https://rottern-tomatos.herokuapp.com/modificar', {
    username: username.value,
    bio: bio.value,
    correo: correo.value,
    nombre: nombre.value,
    contraseña: clave.value,
    id_usuario: this.idu
    }).subscribe(
      res => {
        this.localStore.saveData('username', username.value)
        alert('Cambio exitoso')
        
      },
      err => {
        alert('Error al cambiar los datos')
      }
    )

  }

}
