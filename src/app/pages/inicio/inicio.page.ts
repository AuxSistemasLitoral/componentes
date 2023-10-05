import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [];


  constructor( private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  // mostrarMenu(){
  //   this.menuCtrl.open('first');
  // }

}
