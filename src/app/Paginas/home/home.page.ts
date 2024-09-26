import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {add} from'ionicons/icons';
import { ListaAvisoComponent } from "../../Componentes/lista-aviso/lista-aviso.component";
import { AgregarAvisoComponent } from 'src/app/Componentes/agregar-aviso/agregar-aviso.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [AgregarAvisoComponent,IonIcon, IonFabButton, IonFab, IonHeader, IonToolbar, IonTitle, IonContent, ListaAvisoComponent],
})
export class HomePage {
  constructor(private router:Router) {
    addIcons({add})
  }

  navegarAlFormulario(){
    this.router.navigate(['/formulario-aviso'])
  }
}
