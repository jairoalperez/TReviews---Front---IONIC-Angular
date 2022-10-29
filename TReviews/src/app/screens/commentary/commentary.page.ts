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

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private localStore: LocaldService
  ) { }

  ngOnInit() {
    this.reviewid = this.activatedRoute.snapshot.paramMap.get('id')
  }

  cCommentary() {

    console.log(this.reviewid)

  }

}
