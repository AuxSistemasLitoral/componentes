import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor( private actionsSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  onClick(){
    this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionsSheetCtrl.create({
      header: 'Albumes',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash-outline',
          cssClass: 'red',
          handler: () => {
            console.log('Delete clicked');
          }       
        },
        {
          text: 'Share',
          icon: 'share-outline' ,
          cssClass: 'green',
          handler: () => {
            console.log('Shared clicked');
          }  
        },
        {
          text: 'Play (open modal)',
          icon: 'caret-forward-circle-outline',
          cssClass: 'blue',
          handler: () => {
            console.log('Play clicked');
          },    
        },
        {
          text: 'Favorite',
          icon: 'heart-outline',
          cssClass: 'pink',
          handler: () => {
            console.log('Play clicked');
          },    
        },
        {
          text: 'Cancel',
          icon: 'close-outline',
          cssClass: 'cancel',
          handler: () => {
            console.log('Play clicked');
          },    
        },
      ],
    });

    await actionSheet.present();
  }

}
