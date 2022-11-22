import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  @Input() listaFilmes: any;

  @ViewChild('modal', { static: false }) modal: ModalComponent;

  constructor() {}

  ngOnInit() {}

  openModel(imdbID: string) {
    this.modal.open();
    this.modal.modalImdbID = imdbID;

    console.log(this.modal.modalImdbID);
  }
}
