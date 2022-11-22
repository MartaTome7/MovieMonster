import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { HttpService } from '../http.service';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  @Input() listaFilmes: any;

  @ViewChild('modal', { static: false }) modal: ModalComponent;

  constructor(private httpService: HttpService) {}

  ngOnInit() {}

  openModel(imdbID: string) {
    // obter informacao do filme
    this.httpService.getMovieInfo(imdbID).subscribe({
      next: (response) => {
        this.modal.movieInfo = response;
      },
      error: (error: any) => {
        console.error(error),
          console.error('Request failed with error'),
          (this.modal.errorMessage = error),
          (this.modal.loading = false);
      },
      complete: () => {
        //console.error('Request completed');
        this.modal.loading = false;
      },
    });

    this.modal.modalImdbID = imdbID;

    console.log(this.modal.modalImdbID);
    console.log(this.modal.movieInfo);

    this.modal.open();
  }
}
