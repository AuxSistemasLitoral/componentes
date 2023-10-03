import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.page.html",
  styleUrls: ["./alert.page.scss"],
})
export class AlertPage implements OnInit {
  constructor(private alertCtrl: AlertController) {}

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: "Alert",
      subHeader: "Important message",
      message: "This is an alert!",
      buttons: ["OK"],
    });

    await alert.present();
  }

  async presentAlertMulpleButtons() {
    const alert = await this.alertCtrl.create({
      header: "alert",
      subHeader: "subtitle",
      message: "this is an alert message",
      buttons: [
        {
          text: "Acept",
          handler: () => {
            console.log("click in acept");
          },
        },
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "red",
        },
      ],
    });
    await alert.present();
  }

  async presentAlertPromt() {
    const alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      header: "Promt!",
      inputs: [
        {
          name: "first name",
          type: "text",
          placeholder: "write you name",
        },
        {
          placeholder: "Nickname (max 8 characters)",
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: "number",
          placeholder: "Age",
          min: 1,
          max: 100,
        },
        {
          name: "texto",
          id: "texto",
          type: "textarea",
          placeholder: "A little about yourself",
        },
        {
          name: "url",
          value: "https://ionicframework.com/",
          type: "url",
          placeholder: "site favorite",
          // tpye: 'ulr',
        },
        {
          name: "fecha",
          type: "date",
          min: "1950-01-01",
          max: "2050-12-31",
        },
        {
          name: "number",
          type: "number",
          placeholder: "campo númerico",
          min: -5,
          max: 10,
        },
        {
          name: "password",
          type: "password",
          placeholder: "ingrese su contraseña",
          cssClass: "specialClass",
          attributes: {
            maxLength: 4,
            inputMode: "decimal",
          },
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secundary",
          handler: () => {
            console.log("confirm cancel");
          },
        },
        {
          text: "OK",
          handler: (data: any) => {
            console.log(data);
          },
        },
      ],
    });
    await alert.present();
  }

  async presentAlertRadio() {
    const alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      header: "Promt!",
      inputs: [
        {
          label: "opc 1",
          type: "radio",
          value: 'opc 1'
        },
        {
          label: "opc 2",
          type: "radio",
          value: 'opc 2'
        },
        {
          label: "opc 3",
          type: "radio",
          value: 'opc 3'
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secundary",
          handler: () => {
            console.log("confirm cancel");
          },
        },
        {
          text: "OK",
          handler: (data: any) => {
            console.log(data);
          },
        },
      ]
    });
    await alert.present();
  }

  async presentAcept(){
    const alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      header: "Promt!",
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
          handler: (data: any) => {
            console.log(data);
          },
        },
      ]
    });
    await alert.present();
  }
}
