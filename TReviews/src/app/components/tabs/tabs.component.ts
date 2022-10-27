import { Component, OnInit } from '@angular/core';
import { LocaldService } from 'src/app/services/locald.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  constructor(
    private localStore: LocaldService
  ) { }

  ngOnInit() {}

  cerrarSesion() {
    this.localStore.removeData('username')
    alert('Session Closed')
    location.href = ''

  }

}
