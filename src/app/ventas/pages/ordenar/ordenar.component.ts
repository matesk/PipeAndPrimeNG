import { Component } from '@angular/core';
import { color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent {

  enMayusculas: boolean = true;
  ordenarPor: string = '';

  cambiarMayusculas() {
    this.enMayusculas = !this.enMayusculas;
  }

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: color.verde
    },
    {
      nombre: 'Flash',
      vuela: false,
      color: color.rojo
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: color.verde
    },

  ]

  cambiarOrden(val: string) {
    this.ordenarPor = val;
  }

}
