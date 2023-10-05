import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  proveedores: string[] = ['BAT','COLGATE','GROUPSEB','HDV','HENKEL','JYJ','MONDELEZ','NESTLE','RAMA','RECKITT','ALAMAR','AZULK','COFARMA','ENERGIZER','GROUPSEB','GSK','HACEB','HYUNDAI','INTERDATA','KATORI','LEVAPAN','LG','LICOSINU','LOCERIA','LUKER','MABE','PFIZZER','POLAR','PURINA','PYG','SAMSUNG','SC JOHNSON','SUPER','TECNOQUIMICA','TRIGUISAR','FAMILIA','LINIO',]

  roerderDisable: boolean = true;

  public isDisabled = true;

  constructor() { }

  ngOnInit() {
  }

  doReorder(event: any){

    console.log(event);

    const itemMove = this.proveedores.splice(event.detail.from, 1)[0];
    this.proveedores.splice(event.detail.to, 0, itemMove);

    event.detail.complete();

    console.log(this.proveedores);
  }

  toggleReorder(){
    this.isDisabled = !this.isDisabled;
  }

}
