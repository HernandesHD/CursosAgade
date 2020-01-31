import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CursosComponent } from './cursos/cursos.component';


const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'cursos', component: CursosComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
