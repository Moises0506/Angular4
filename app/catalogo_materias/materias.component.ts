import { Component } from '@angular/core';
import { Materias } from './modelo/materias';

@Component({
    selector:'materias',
    templateUrl:'./html/materias.html' ,
    styleUrls: ['./css/stylesMate.css'],
})

export class MateriasComponente{
    arrayMaterias: Array<Materias>;

    constructor(){
        this.arrayMaterias=[
            new  Materias(1,'MATINT-01','Matematicas Integrales',true),
            new  Materias(2,'QUIMICA-11','Quimica',false),
            new  Materias(3,'INGMECA-04','Ingenieria Mecanica',true),
            new  Materias(4,'ADMMON-09','Administracion',true)
        ]
    }

}