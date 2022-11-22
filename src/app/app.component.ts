import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ';
  appFilmes: any;
  errorMessage: any;
  loading: boolean = false;

  constructor(private httpService: HttpService) {}

  ngOnInit() {}

  getMovie(txtPesquisa) {
    // limpar a tabela
    //var tableMovieInfo = document.getElementById('listaID');
    //tableMovieInfo.innerHTML = '';

    // validar o input
    if (txtPesquisa === '') {
      alert('Por favor introduza um valor para o nome do filme!');
      return;
    }

    this.httpService.getMovies(txtPesquisa).subscribe({
      next: (response) => {
        this.appFilmes = response;
      },
      error: (error: any) => {
        console.error(error),
          console.error('Request failed with error'),
          (this.errorMessage = error),
          (this.loading = false);
      },
      complete: () => {
        //console.error('Request completed');
        this.loading = false;
      },
    });

    console.log(this.appFilmes);
  }
}
