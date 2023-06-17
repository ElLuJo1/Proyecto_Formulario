import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import { EventosService } from "src/app/services/eventos.service";
import * as moment from "moment";

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  modoEdicion = false;
  objeto_personaEdicionIndex: number |null =null;
  
  objeto_persona: any = {
    cedula: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    ciudad: "",
    correo: "",
    fecha_nacimiento: new Date(),
    es_donante: false
  };

  objeto_ciudad: any = [
    'PORTOVIEJO',
    'ROCAFUERTE',
    'SANTA ANA',
    'MANTA',
    'CHONE',
  ];

  objeto_tabla: any = [];

  constructor(
    private fb: FormBuilder,
    public eventos: EventosService,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
     /*this.usuarioForm = this.fb.group({
       usuario: [null, [Validators.required]],
       password: [null, [Validators.required]],
       remember: [true]
     });*/
    console.log(this.objeto_persona);
  }

  dar_click() {

    if (this.modoEdicion && this.objeto_personaEdicionIndex !== null) {
      this.objeto_tabla[this.objeto_personaEdicionIndex] = { ...this.objeto_persona };
      this.modoEdicion = false;
      this.objeto_personaEdicionIndex = null;
      this.limpiar_datos();
    } else {
  
    console.log(this.objeto_persona);
    this.objeto_tabla.push(this.objeto_persona);
    console.log(this.objeto_tabla);
    this.limpiar_datos();
  }
  }

  limpiar_datos() {
    this.objeto_persona = {
      cedula: "",
      nombres: "",
      apellidos: "",
      telefono: "",
      ciudad: "",
      correo: "",
      fecha_nacimiento: new Date(),
      es_donante: false
    };
  }

  eliminar(index: number) {
    this.objeto_tabla.splice(index, 1);
  }

  editar(data: any) {
    this.modoEdicion = true;
    this.objeto_personaEdicionIndex = this.objeto_tabla.indexOf(data);
    this.objeto_persona ={...data};

    }

}


