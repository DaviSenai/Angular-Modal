import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { YesNoComponentComponent } from './yes-no-component/yes-no-component.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DogFactsComponentComponent } from './dog-facts-component/dog-facts-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    YesNoComponentComponent,
    DogFactsComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
