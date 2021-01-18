import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  pedido: Pedido = new Pedido();
  constructor() { }

  ngOnInit(): void {
  }

  agregarProducto(){
    this.pedido.pedidoDetalle.push({
      producto: 'Jugo de Uva',
      cantidad: 10,
      precio: 8,
      total: 80
    })
    Swal.fire({
      title: 'Producto Agregado',
      text: "Se agregó correctamente",
      icon: 'success'
    })
  }

  seElimino(evento){
    this.pedido.pedidoDetalle.splice(evento.id, 1)
    console.log(evento.id)
    Swal.fire({
      title: 'Producto Eliminado',
      text: "Se eliminó correctamente",
      icon: 'warning'
    })
  }
}
