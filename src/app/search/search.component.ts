import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private musicService:MusicService, private route: ActivatedRoute,private location: Location,
    private router:Router) { }
  arrayOfMusic:any=[];

  ngOnInit() {
    this.getMusicAfterSearch();
  }
 

getMusicAfterSearch(): void {

    const search = this.route.snapshot.paramMap.get('id');
     this.musicService.getMusicAfterSearch(search).subscribe(data => {
  
     console.log("This too works..");
      this.arrayOfMusic=data.results.trackmatches.track;
     
  });
}

}
