import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html'  
})
export class FrutaComponent {
  	public nombre_componente = 'Componente_fruta';
  	public listado_frutas = 'Pera, Manzana, Sandia';
  
}