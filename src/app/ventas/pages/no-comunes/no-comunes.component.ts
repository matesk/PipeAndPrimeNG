import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})

export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Pablo';
  genero: string = 'masculino'

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Pablo', 'Mirian'];

  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',
  }

  cambiarCliente() {

    if (this.nombre === 'Mirian') {
      this.nombre = 'Pablo';
      this.genero = 'masculino'
    } else {
      this.nombre = 'Mirian';
      this.genero = 'femenino'
    }

  }

  borrarCliente() {
    this.clientes.shift();
  }

  //KeyValue pipe
  persona = {
    nombre: 'Pablo',
    edad: 29,
    direccion: 'Zaragoza, España'
  }

  //JSON pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Spiderman',
      vuela: false
    },
    {
      nombre: 'Iron man',
      vuela: true
    },
  ]

  //Async pipe
  miObservable = interval(1000); // 0,1,2,3,4,5,6,7 cada 1000ms

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });

}
