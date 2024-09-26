import { Component, OnInit } from '@angular/core';
import { Aviso } from 'src/app/Modelo/Aviso';
import { IonList, IonCard, IonCardContent, IonItem, IonRow, IonCol, IonImg, IonButton, IonIcon, IonCardTitle, IonCardHeader, IonCardSubtitle } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { trash, eye } from 'ionicons/icons';
import { VentanaModalEliminarComponent } from '../ventana-modal-eliminar/ventana-modal-eliminar.component';
import { ModalController } from '@ionic/angular/standalone';
import { DetallesAvisoComponent } from '../detalles-aviso/detalles-aviso.component';
import { AvisoBDService } from 'src/app/Servicios/aviso-bd.service';

@Component({
  selector: 'app-lista-aviso',
  templateUrl: './lista-aviso.component.html',
  styleUrls: ['./lista-aviso.component.scss'],
  standalone: true,
  imports:[CommonModule,IonList, IonCard, IonCardContent, IonItem, IonRow, IonCol, IonImg, IonButton, IonIcon]
})
export class ListaAvisoComponent  implements OnInit {

  ListaAvisos:Aviso[] =[]

  constructor(private avisoService:AvisoBDService, private modalController:ModalController) { 
    addIcons({trash,
      eye
    })
  }

   async ngOnInit() {
    await this.avisoService.iniciarPlugin()
    this.ListaAvisos = await this.avisoService.getAvisos()
  }

  async eliminarAviso(indice: number) {
    const aviso = this.ListaAvisos[indice]; // Obtén el aviso
    const modal = await this.modalController.create({
      component: VentanaModalEliminarComponent,
    });
  
    await modal.present();
  
    const { data } = await modal.onDidDismiss();
  
    if (data && data.confirm) {
      // Llama a eliminarAviso pasando el ID del aviso
      await this.avisoService.eliminarAviso(aviso.id);
      this.ListaAvisos = await this.avisoService.getAvisos(); // Actualiza la lista de avisos
    }
  }

  async verDetallesAviso(aviso: Aviso) {
    const modal = await this.modalController.create({
      component: DetallesAvisoComponent,
      componentProps: {
        aviso
      }
    });

    await modal.present();
  }

}
