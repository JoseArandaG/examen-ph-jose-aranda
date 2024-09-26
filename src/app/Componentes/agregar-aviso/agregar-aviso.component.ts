import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Aviso } from 'src/app/Modelo/Aviso';
import { IonList, IonItem, IonInput, IonText, IonButton, IonContent } from "@ionic/angular/standalone";
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { FotoAvisoComponent } from "../foto-aviso/foto-aviso.component";
import { AvisoBDService } from 'src/app/Servicios/aviso-bd.service';

@Component({
  selector: 'app-agregar-aviso',
  templateUrl: './agregar-aviso.component.html',
  styleUrls: ['./agregar-aviso.component.scss'],
  standalone: true,
  imports: [IonContent, IonList, IonInput, IonItem, FormsModule, IonText, IonButton, CommonModule, FotoAvisoComponent]
})
export class AgregarAvisoComponent  implements OnInit {

  @Input() aviso : Aviso[] = []

  @Output() agregarAvisoEvent = new EventEmitter<Aviso>()

  titulo: string=""
  descripcion: string=""
  foto:string=""
  avisoGuardado: boolean = false;

  constructor(private avisoService:AvisoBDService) { }


  async agregarAviso() {
    if (this.titulo.length >= 5 && this.descripcion.length >= 20) {
      const fechaActual = new Date().toISOString();  // Formato ISO para almacenar la fecha como string
      
      try {
        // Inserta el aviso en la base de datos
        await this.avisoService.agregarAviso(this.titulo, this.descripcion, "", fechaActual);

        // Crear un nuevo objeto Aviso para emitirlo
        const nuevoAviso: Aviso = {
          id:0,
          titulo: this.titulo,
          descripcion: this.descripcion,
          foto: "",  // Foto vacía por el momento
          fecha: new Date().toISOString()  // Usamos la fecha como objeto Date para la aplicación
        };

        // Emitir el nuevo aviso a través del Output EventEmitter
        this.agregarAvisoEvent.emit(nuevoAviso);

        // Marcar que el aviso fue guardado exitosamente
        this.avisoGuardado = true;

        // Resetear los campos del formulario
        this.titulo = "";
        this.descripcion = "";
        this.foto=""

      } catch (error) {
        console.error("Error al guardar el aviso:", error);
      }

    } else {
      alert('El título debe tener al menos 5 caracteres y la descripción 20.');
    }
  }

  ngOnInit() { }

}
