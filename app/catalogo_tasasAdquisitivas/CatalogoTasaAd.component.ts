import { Component } 	  from '@angular/core';
import { CatalogoTasaAd } from './model/CatalogoTasaAd';


@Component({
	selector:'catTasaAdqui',
	templateUrl: './html/catTasaAdquisitiva.html'	
})

export class CatalogoTasa {
	public catTasas:Array<CatalogoTasaAd>;
	public cambiaColor:string;
	public seleccion_color:string;
	constructor(){
		this.catTasas=[
			new CatalogoTasaAd(1,'Tasa de Redondeo',	12.3, true),
			new CatalogoTasaAd(2,'Tasa de Liberacion',	10.3, true),
			new CatalogoTasaAd(3,'Tasa Extendida', 		15.3, true),
			new CatalogoTasaAd(4,'Tasa Especial N1',	5.3,  true),
		]
		this.cambiaColor = 'purple';
		this.seleccion_color='#5DADE2';
	}

	ngOnInit(){
		console.log(this.catTasas);
	}
	logColorSeleccionado(){		
		console.log(this.seleccion_color);
		
	}
}