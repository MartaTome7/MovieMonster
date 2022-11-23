import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListaComponent } from './lista/lista.component';
import { ModalComponent } from './lista/modal/modal.component';
import { RowComponent } from './lista/row/row.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ListaComponent,
    ModalComponent,
    RowComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
