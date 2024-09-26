import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { IonButton, IonIcon, IonContent, IonRow, IonCol, IonImg, IonGrid, IonCard, IonCardContent, IonList, IonItem, IonThumbnail } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { camera } from 'ionicons/icons'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-foto-aviso',
  templateUrl: './foto-aviso.component.html',
  styleUrls: ['./foto-aviso.component.scss'],
  standalone: true,
  imports:[CommonModule,IonButton,IonIcon, IonContent,IonRow, IonCol, IonImg,IonGrid, IonCard, IonCardContent, IonList, IonItem, IonThumbnail]
})
export class FotoAvisoComponent  implements OnInit {

  fotos:string[]=[]

  constructor() {
    addIcons({camera})
   }

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64      
    });

    if(image.base64String != null || image.base64String != undefined){
      this.fotos.push(image.base64String)
    }
  }

  ngOnInit() {}

}
