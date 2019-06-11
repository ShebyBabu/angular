import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private httpclient: HttpClient) { }
track: any;
  getMusicAfterSearch(value):any{
    var url=`http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=920f792ee345290b28ca1b88329197b4&track=${value}&format=json`;
    return this.httpclient.get(url);
  }

  getTopTracks():any{
    return this.httpclient.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=920f792ee345290b28ca1b88329197b4&format=json");
  }

  setWishList(value) : any{
    console.log(value);
    //this.track= new Track(value.listeners, value.name, value.url);
    return this.httpclient.post("http://localhost:8080/api/v1/music",value).subscribe();
  }
  getWishlistMusic(): any{
    return this.httpclient.get("http://localhost:8080/api/v1/display");
  }

  getDetails(artist,name): any{
    console.log(artist, name)
    // var url=`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=920f792ee345290b28ca1b88329197b4&artist=${encodeURIComponent(artist)}&track=${encodeURIComponent(name)}&format=json`;
    var url = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=920f792ee345290b28ca1b88329197b4&artist=${artist}&album=${name}&format=json`
  return this.httpclient.get(url);
  }

  deleteMusic(value): any{
    return this.httpclient.delete(`http://localhost:8080/api/v1/music/${value}`).subscribe();
  }
}
