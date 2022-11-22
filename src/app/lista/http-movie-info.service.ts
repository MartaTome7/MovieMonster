import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpMovieInfoService {
  private urlp1 = 'https://www.omdbapi.com/?i=';
  private urlp2 = '&apikey=3f092409';

  constructor(private http: HttpClient) {}

  getMovieInfo(imdbID: string) {
    var url = this.urlp1 + imdbID + this.urlp2;
    return this.http.get(url);
  }
}
