import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';
import { MenuVerticalComponent } from './menu-vertical/menu-vertical.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { TopBarComponent } from './top-bar/top-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InicioComponent,
    RegistroComponent,
    ListadoComponent,
    DetalleComponent,
    MenuVerticalComponent,
    EstadisticasComponent,
    TopBarComponent
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
