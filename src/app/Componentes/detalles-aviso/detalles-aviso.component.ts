import { Component, OnInit, Input } from '@angular/core';
import {ModalController, IonCardSubtitle } from '@ionic/angular/standalone';
import {IonCardTitle , IonCard, IonCardHeader, IonCardContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonContent, IonImg } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { Aviso } from 'src/app/Modelo/Aviso';


@Component({
  selector: 'app-detalles-aviso',
  templateUrl: './detalles-aviso.component.html',
  styleUrls: ['./detalles-aviso.component.scss'],
  standalone: true,
  imports:[ IonCardSubtitle,CommonModule,IonCardTitle ,IonCard, IonCardHeader, IonCardContent,IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonContent, IonImg]
})
export class DetallesAvisoComponent  implements OnInit {

  @Input() aviso!:Aviso;

  titulo!: string;
  fecha!: string;
  descripcion!: string;
  foto!: string;

  

  constructor(private modalController: ModalController) {
   }

  ngOnInit() {
    if (this.aviso) {
      this.titulo = this.aviso.titulo;
      this.fecha = this.aviso.fecha;
      this.descripcion = this.aviso.descripcion;
      this.foto = this.aviso.foto;
    }
  }

  cerrarModal(){
    this.modalController.dismiss()
  }

}
