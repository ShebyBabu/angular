import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private musicService: MusicService,private route :Router) { }
  arrayOfMusic:any=[];

  ngOnInit() {
  }
  click(value){
   
    this.route.navigateByUrl("/result/"+value);
    console.log("This Works");  
  }
}
