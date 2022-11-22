import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private urlp1 = 'https://www.omdbapi.com/?s=';
  private urlp2 = '&apikey=3f092409';

  private urlp3 = 'https://www.omdbapi.com/?i=';
  private urlp4 = '&apikey=3f092409';

  constructor(private http: HttpClient) {}

  getMovies(txtPesquisa: string) {
    var url = this.urlp1 + txtPesquisa + this.urlp2;
    return this.http.get(url);
  }

  getMovieInfo(imdbID: string) {
    var url = this.urlp3 + imdbID + this.urlp4;
    return this.http.get(url);
  }
}
