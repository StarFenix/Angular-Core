import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PedidoDetalle } from '../models/pedido-detalle';

@Component({
  selector: 'app-pedido-detalle',
  templateUrl: './pedido-detalle.component.html',
  styleUrls: ['./pedido-detalle.component.css']
})
export class PedidoDetalleComponent implements OnInit {
  @Input() pedidoDetalle: PedidoDetalle[] = new Array<PedidoDetalle>();
  @Output() eliminado = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  eliminar(posicion: number){
    this.eliminado.emit({ id: posicion })
  }

}
