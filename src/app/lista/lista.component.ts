import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { HttpMovieInfoService } from './http-movie-info.service';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  private httpService: HttpMovieInfoService;

  @Input() listaFilmes: any;

  @ViewChild('modal', { static: false }) modal: ModalComponent;

  constructor() {}

  ngOnInit() {}

  openModel(imdbID: string) {
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

    //console.log(this.movieInfo);

    this.modal.open();
    this.modal.modalImdbID = imdbID;

    console.log(this.modal.modalImdbID);
  }
}
