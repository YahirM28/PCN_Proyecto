import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { PoliticasprivacidadComponent } from './components/politicasprivacidad/politicasprivacidad.component';
import { PorproductorComponent } from './components/porproductor/porproductor.component';
import { PorproductoComponent } from './components/porproducto/porproducto.component';
import { PorprovinciaComponent } from './components/porprovincia/porprovincia.component';
import { CestaComponent } from './components/cesta/cesta.component';
import { FrutasComponent } from './components/frutas/frutas.component';
import { ChiriquiComponent } from './components/chiriqui/chiriqui.component';
import { ManuelsanchezComponent } from './components/manuelsanchez/manuelsanchez.component';
import { DetallesproductosComponent } from './components/detallesproductos/detallesproductos.component';
import { DetallesfrutasComponent } from './components/detallesfrutas/detallesfrutas.component';
import { DetalleslegumbresComponent } from './components/detalleslegumbres/detalleslegumbres.component';
import { RaicesComponent } from './components/raices/raices.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TiendaComponent,
    ContactanosComponent,
    PoliticasprivacidadComponent,
    PorproductorComponent,
    PorproductoComponent,
    PorprovinciaComponent,
    CestaComponent,
    FrutasComponent,
    ChiriquiComponent,
    ManuelsanchezComponent,
    DetallesproductosComponent,
    DetallesfrutasComponent,
    DetalleslegumbresComponent,
    RaicesComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
