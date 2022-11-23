import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  @Input() listaFilmes: any;

  constructor() {}

  ngOnInit() {}

  
}
