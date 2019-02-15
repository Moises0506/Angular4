import { Component } from '@angular/core';
import { Empleado  } from './model/empleado';			// Se importa el modelo EMPLEADO

@Component({
	selector:'empleado_etiqueta',
	templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{
	public titulo_empleado = 'Titulo de Empleado';
	public empleado:Empleado;					// Se crea una variable de tipo EMPLEADO
	public trabajadores:Array<Empleado>;		// Se crea un Array de tipo Empleado
	public trabajador_externo:boolean;	
	//*********
	//Tipos de Datos
	/*	ANY: Cualquier tipo de dato
	*	NUMBER: Datos numericos.
	*	string: Solo cadenas de texto
	*/
	// Se inicia el constructor, mismo que es el pimero en arrnancar
	constructor(){
		this.empleado = new Empleado('Moises',38,'TI',false)  // Se crea una instancia de tipo Empleado con parametros
		this.trabajadores = [									    // Se incicializa el Arreglo con tres Objetos tipo Empleado
			new Empleado('Moises',38,'TI FONDOS',true),
			new Empleado('Maribel',34,'Sistemas',true),
			new Empleado('Jacinto',23,'Sistemas',true)
		]
		this.trabajador_externo =true;		
	}

	// Primer metodo en iniciarce en pantalla
	ngOnInit(){
		console.log(this.empleado);			//Se imprime en consola la variable empleado
		console.log(this.trabajadores);		//Se imprime en consola el Array con los objetos contenidos

	}

	cambiarExterno(valor){
		this.trabajador_externo =valor;
	}
}