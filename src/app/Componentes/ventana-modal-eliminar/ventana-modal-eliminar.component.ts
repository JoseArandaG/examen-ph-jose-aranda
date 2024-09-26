import { Component, OnInit } from '@angular/core';
import {ModalController, IonFooter } from '@ionic/angular/standalone'
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-ventana-modal-eliminar',
  templateUrl: './ventana-modal-eliminar.component.html',
  styleUrls: ['./ventana-modal-eliminar.component.scss'],
  standalone: true,
  imports:[IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonContent]
})
export class VentanaModalEliminarComponent  implements OnInit {

  constructor(private modalController:ModalController) { }


  ConfirmarBorrar(){
    this.modalController.dismiss({ confirm:true})
  }

  CancelarBorrar(){
    this.modalController.dismiss({confirm:false})
  }

  ngOnInit() {}

}
