import { Component } from '@angular/core';
import { DataService } from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ticketera-app';
  botones=[
    {
      descripcion:"Cuales desperfectos y dónde ocurren",
      link: "https://ticketera-back.herokuapp.com/tickets/ejercicio1",
      resultado: null
    },
    {
      descripcion:"Cada cuánto ocurren los desperfectos",
      link:"https://ticketera-back.herokuapp.com/tickets/ejercicio2",
      resultado: null
    },
    {
      descripcion:"Quién atiende más tickets",
      link:"https://ticketera-back.herokuapp.com/tickets/ejercicio3",
      resultado: null
    },
    {
      descripcion:"A qué hora hay más trabajo",
      link:"https://ticketera-back.herokuapp.com/tickets/ejercicio4",
      resultado: null
    },
    {
      descripcion:"Qué trabajos están sin resolver",
      link:"https://ticketera-back.herokuapp.com/tickets/ejercicio5",
      resultado: null
    },
    {
      descripcion:"Desperfectos por zona",
      link:"https://ticketera-back.herokuapp.com/tickets/ejercicio6",
      resultado: null
    },
    {
      descripcion:"Atención hecha por zona",
      link:"https://ticketera-back.herokuapp.com/tickets/ejercicio7",
      resultado: null
    },
    {
      descripcion:"Quién hace más tickets",
      link:"https://ticketera-back.herokuapp.com/tickets/ejercicio8",
      resultado: null
    },
    {
      descripcion:"Quién tiene tickets sin resolver",
      link:"https://ticketera-back.herokuapp.com/tickets/ejercicio9",
      resultado: null
    },
    {
      descripcion:"En qué zona hay más clientes",
      link:"https://ticketera-back.herokuapp.com/clientes/ejercicio10",
      resultado: null
    },
    {
      descripcion:"Qué cliente es empleado y generó ticket",
      link:"https://ticketera-back.herokuapp.com/empleados/ejercicio11",
      resultado: null
    },
    {
      descripcion:"Qué planes tiene contratado cada cliente",
      link:"https://ticketera-back.herokuapp.com/clientes/ejercicio12",
      resultado: null
    }
  ]

  constructor(private servicioDatos : DataService){
  }

  traerResultado(boton : any){
    this.botones.forEach(boton => {
      boton.resultado = null;
    });

    this.servicioDatos.getData(boton.link).subscribe((datos : any)=>{
      boton.resultado = JSON.stringify(datos);
    });
  }
}
