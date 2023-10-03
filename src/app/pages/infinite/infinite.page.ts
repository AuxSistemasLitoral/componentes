import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

   data : any [] = Array(20);

   @ViewChild(IonInfiniteScroll) InfiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    console.log(event);

    setTimeout(() => {

      if(this.data.length >50){
        this.InfiniteScroll.complete();
        this.InfiniteScroll.disabled = true;
        return;

      }

        const nuevoArray = Array(20);
        this.data.push(...nuevoArray);
        //event.target.complete();
        this.InfiniteScroll.complete();
    }, 1500);
  }

}
