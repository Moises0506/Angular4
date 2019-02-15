import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import {EmpleadoComponent} from './empleado/empleado.component';
import { CatalogoPuestos } from './catalogo_Puestos/catalogopuestos.component';
import { CatalogoTasa } from './catalogo_tasasAdquisitivas/CatalogoTasaAd.component';
import {ProductoComponent } from './catalogo_Productos/productos.component';
import { CatalogoPerfilesComponent } from './catalogo-perfiles/catalogo-perfiles.component';
import { MateriasComponente } from './catalogo_materias/materias.component';
import { ErrorComponent } from "./PaginaError/errorPagina.component";
import { ContactoComponent } from './contacto/contacto.component';
import {  HomeComponent} from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    CatalogoPuestos,
    CatalogoTasa,
    ProductoComponent,
    CatalogoPerfilesComponent,
    MateriasComponente,
    ErrorComponent,
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
