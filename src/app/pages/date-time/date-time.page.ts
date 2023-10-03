import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();

  customYerValues = [2025, 2020, 2015, 2010, 2005, 2000];

  customPickerOptions = {
     buttons: [
      {
        text: 'aceptar',
        handler: (event) =>{
          console.log(event);
        }
      },
      {
        text: 'Cancel',
        handler:() =>{
          console.log('log!')
        }
      }
     ]
  }

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event){
    console.log(new Date(event.detail.value));
  }

}
