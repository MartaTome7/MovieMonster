import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListaComponent } from './lista/lista.component';
import { RowComponent } from './lista/row/row.component';
import { ModalComponent } from './lista/row/modal/modal.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ListaComponent,
    RowComponent,
    ModalComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
