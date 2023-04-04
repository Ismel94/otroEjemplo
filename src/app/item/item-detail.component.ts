import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Pieza } from './pieza'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-details',
  templateUrl: './item-detail.component.html',
})
export class ItemDetailComponent implements OnInit {
  pieza: Pieza;
  id: number;
  nombre: string = '';
  precio: number;
  importada: string;

  constructor(private itemService: ItemService, private route: ActivatedRoute) {
    this.getPieza();
  }

  ngOnInit(): void {

  }
  public getPieza() {
    console.log('Method get Pieza');
    const id = +this.route.snapshot.params.id
    this.itemService.getPieza(id).subscribe(res => {
      this.pieza = res;
      this.nombre = this.pieza.nombre;
      this.id = this.pieza.id;
      this.precio = this.pieza.precio;
      this.importada = (this.pieza.importada) ? 'Si' : 'No';
      console.log(`ID: ${this.pieza.id} Nombre1: ${this.pieza.nombre} Precio: ${this.pieza.precio} Importada: ${this.pieza.importada}`);

    });
    console.log('Method get Pieza 2');
  }
}
