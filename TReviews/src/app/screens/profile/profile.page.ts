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
  udata;
  idu;
  reviews;

  constructor(
    private localStore: LocaldService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    
    this.http.get('https://rottern-tomatos.herokuapp.com/buscar-nombre/'+this.localStore.getData('username'))
      .subscribe(res => {
        this.user = res;
        this.udata = this.user.find(udata => udata.username = this.localStore.getData('username'))
        this.idu = this.udata.id_usuario
      }
      )

      this.http.get('https://rottern-tomatos.herokuapp.com/resena-buscar/'+this.localStore.getData('username'))
      .subscribe(res => {
        this.reviews = res;
      }
      )

  }

}
