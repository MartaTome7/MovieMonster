import { Component, Input, ViewChild, OnInit, ElementRef } from '@angular/core';

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
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }
}
