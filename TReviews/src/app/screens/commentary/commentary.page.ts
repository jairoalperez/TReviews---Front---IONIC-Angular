import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { LocaldService } from 'src/app/services/locald.service';

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.page.html',
  styleUrls: ['./commentary.page.scss'],
})
export class CommentaryPage implements OnInit {

  reviewid;

  review;
  rdata;
  userr;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private localStore: LocaldService
  ) { }

  ngOnInit() {
    this.reviewid = this.activatedRoute.snapshot.paramMap.get('id')

    this.http.get('https://rottern-tomatos.herokuapp.com/resena-id/'+this.reviewid)
      .subscribe(res => {
        this.review = res;
        this.rdata = this.review.find(rdata => rdata.id_resena = this.reviewid)
        this.userr = this.rdata.username
      }
      )

  }

  cCommentary(contenido) {

    var tt = Date.now()
    var hoy = new Date(tt)
    var fs: string = hoy.toDateString()

    this.http.post('https://rottern-tomatos.herokuapp.com/comentario-crear', {
    id_resena: this.reviewid,
    fecha: fs,
    comentarios: contenido.value,
    username: this.userr,
    }).subscribe(
      res => {
        alert('Comment created')
        location.href = 'review/'+this.reviewid
      },
      err => {
        alert('Error al crear el comentario')
      }
    )

  }

}
