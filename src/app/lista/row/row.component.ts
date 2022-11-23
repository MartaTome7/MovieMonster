import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Filme } from '../../Filme';
import { HttpService } from '../../http.service';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
})
export class RowComponent implements OnInit {
  @Input() filme: Filme;

  @ViewChild('modal', { static: false }) modal: ModalComponent;

  constructor(private httpService: HttpService) {}

  ngOnInit() {}

  openModel() {
    console.log('entrei');
    // obter informacao do filme
    this.httpService.getMovieInfo(this.filme.imdbID).subscribe({
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

    this.modal.modalImdbID = this.filme.imdbID;

    console.log(this.modal.modalImdbID);
    console.log(this.modal.movieInfo);

    this.modal.open();
  }
}
