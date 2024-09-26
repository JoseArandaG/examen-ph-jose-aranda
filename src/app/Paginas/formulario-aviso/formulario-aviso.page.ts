import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { AgregarAvisoComponent } from 'src/app/Componentes/agregar-aviso/agregar-aviso.component';

@Component({
  selector: 'app-formulario-aviso',
  templateUrl: './formulario-aviso.page.html',
  styleUrls: ['./formulario-aviso.page.scss'],
  standalone: true,
  imports: [AgregarAvisoComponent,IonIcon, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FormularioAvisoPage implements OnInit {

  constructor(private router:Router) {
    addIcons({arrowBack})
  }

  VolverAlHome(){
    this.router.navigate(['/'])
  }

  ngOnInit() {
  }

}
