import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, ActivatedRoute } from '@angular/router';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private httpclient: HttpClient, private musicService: MusicService, private router: ActivatedRoute) { }

  ngOnInit() {
  }

}
