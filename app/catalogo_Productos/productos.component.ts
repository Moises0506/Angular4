import { Component } from '@angular/core';
import { Productos} from './model/productos';

@Component({
    selector:'productos',
    templateUrl:'./html/productos.html',
    styleUrls: ['./css/styles.css'],

})

export class ProductoComponent{
    arrayProductos:Array<Productos>;

    constructor(){
        this.arrayProductos=[
         new Productos( 1,'Atun dolores',23.43,23),
         new Productos(2, 'Salvo quita grasa', 18.50, 45),
         new Productos (3, 'Agua Santa Maria', 15.50, 38)         
        ]
    }
   
}

