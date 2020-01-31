import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InicioComponent } from './inicio/inicio.component';
import { CursosComponent } from './cursos/cursos.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
