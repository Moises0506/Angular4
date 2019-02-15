import { Component }  from '@angular/core';
import { CatPuestos } from './model/catalogoPuestos';

@Component({
	selector:'catpuestos',
	templateUrl: './html/catpuestos.component.html'
})

export class CatalogoPuestos{
	public catpuestos:Array<CatPuestos>;

	constructor(){

		this.catpuestos =[
				new CatPuestos('1A','TIF','Sistemas Fondos',true),
				new CatPuestos('2A','CONF','Contabilidad Seguros',true),
				new CatPuestos('3A','ADMF','Administracion Seguros',false),
				new CatPuestos('4A','COM','Comercializacion de Zona',false)
			]		
	}

	ngOnInit(){
		console.log(this.catpuestos);
	}

	changeEstatus(){
		
	}
		
}