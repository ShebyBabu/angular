import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {



  constructor(private musicService: MusicService ,private route :Router) { }
  arrayOfMusic:any=[];
  ngOnInit() {
      this.musicService.getTopTracks().subscribe(data=>
        {
            console.log(data.tracks.track);
            this.arrayOfMusic=data.tracks.track;
        });

        
  }

  addToWishlist(value): any{
    
    console.log(value);
    let Track = {  
trackId : value.listeners,
trackName : value.name,
comments: value.artist.name
    }
    this.musicService.setWishList(Track);
  }

  getDetails(value): any{
    this.route.navigateByUrl("/details/"+value.artist.name+"/"+value.name);
    // console.log(value);
    // this.musicService.getDetails(value);
  }

}
