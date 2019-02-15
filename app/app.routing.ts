import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

//Importar componentes
//import { IndexComponent } from "module";
import {ErrorComponent} from './PaginaError/errorPagina.component';
import {ProductoComponent} from './catalogo_Productos/productos.component'
import { CatalogoTasa} from "./catalogo_tasasAdquisitivas/CatalogoTasaAd.component";
import { HomeComponent} from "./home/home.component";
import { ContactoComponent} from "./contacto/contacto.component";

const appRoutes: Routes =[        
    {path:'', component: ErrorComponent},
    {path:'productos', component: ProductoComponent},
    {path: 'tasas', component: CatalogoTasa},    
    {path:'home', component: HomeComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


