import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {

  reviewid;
  review;
  rdata;
  movieid;
  movie;

  URL_API = 'https://api.themoviedb.org/3/movie/'
  API_KEY = '?api_key=91355432bcd29434c686a0d24d0947fd'
  IMG_URL = 'https://image.tmdb.org/t/p/w500'

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.reviewid = this.activatedRoute.snapshot.paramMap.get('id')

    this.http.get('https://rottern-tomatos.herokuapp.com/resena-id/'+this.reviewid)
      .subscribe(res => {
        this.review = res;
        this.rdata = this.review.find(rdata => rdata.id_resena = this.reviewid)
        this.movieid = this.rdata.pelicula

        this.http.get(this.URL_API+this.movieid+this.API_KEY)
        .subscribe(res => this.movie = res)

        //this.localStore.saveData('iduser', idu)
        //console.log(this.localStore.getData('username')+' '+this.localStore.getData('iduser'))
      }
      )

  }

}
