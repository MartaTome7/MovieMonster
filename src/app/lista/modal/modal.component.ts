import { Component, Input, ViewChild, OnInit, ElementRef } from '@angular/core';
import { HttpMovieInfoService } from './http-movie-info.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  modalImdbID: string = null;
  movieInfo: any;
  errorMessage: any;
  loading: boolean = false;

  @ViewChild('myModal', { static: false }) modal: ElementRef;

  constructor() {}

  ngOnInit() {}

  open() {
    this.modal.nativeElement.style.display = 'block';

    //this.httpService.getMovieInfo(this.modalImdbID).subscribe({
    //  next: (response) => {
    //    this.movieInfo = response;
    //  },
    //  error: (error: any) => {
    //    console.error(error),
    //      console.error('Request failed with error'),
    //      (this.errorMessage = error),
    //      (this.loading = false);
    //  },
    //  complete: () => {
    //    //console.error('Request completed');
    //    this.loading = false;
    //  },
    //});

    //console.log(this.movieInfo);
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }
}
