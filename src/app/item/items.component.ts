import { Component, OnInit } from '@angular/core'

import { Pieza } from './pieza'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  piezas!: Pieza[];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.list();
  }

  public list() {
    console.log('Hola Native Script');
    this.itemService.listPiezas().subscribe(res => {
      console.log('paso');
      this.piezas = res;
    },
      (error) => {
        console.log('errore');
        //console.error(error);
      }
    )
  }
}
