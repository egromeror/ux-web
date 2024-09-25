import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: 'registro', component: RegistroComponent, pathMatch: 'full' },
  { path: 'listado', component: ListadoComponent, pathMatch: 'full' },
  { path: 'detalle', component: DetalleComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
