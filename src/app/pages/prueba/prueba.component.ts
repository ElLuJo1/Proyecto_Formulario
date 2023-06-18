import { Component } from "@angular/core";

@Component({
  selector: "app-prueba",
  templateUrl: "./prueba.component.html",
  styleUrls: ["./prueba.component.css"],
})
export class PruebaComponent {
  listaTiposHabitacion: string[] = ["Individual","Doble","Triple","Quad","Queen","King","Twin","Suite","Master Suite"];
  listaReservas: any[] = [];
  modoEdicion = false;
  reservaEdicionIndex: number | null = null;

  reserva: any = {
    nombreCliente: "",
    apellido: "",
    telefono: "",
    numeroPersonas: null,
    tipoHabitacion: "",
    fechaEntrada: null,
    fechaSalida: null,
    requerimientos: "", 
    horaReserva: "",
  };

  guardarReserva() {
    if (!this.validarNombre(this.reserva.nombreCliente)) {
      alert("Ingrese un nombre válido");
      return;
    }

    if ( !this.validarApellido(this.reserva.apellido)) {
      alert("Ingrese un apellido válidos ");
      return;
    }

    if (!this.validarTelefono(this.reserva.telefono)) {
      alert("Ingrese un teléfono válido");
      return;
    }

    if (this.modoEdicion && this.reservaEdicionIndex !== null) {
      this.listaReservas[this.reservaEdicionIndex] = { ...this.reserva };
      alert("Actualizada correctamente");
      this.modoEdicion = false;
      this.reservaEdicionIndex = null;
    } else {
      const horaActual = new Date().toLocaleTimeString();
      this.reserva.horaReserva = horaActual;
      this.listaReservas.push({ ...this.reserva });
      alert("Guardada correctamente");
    }
    this.limpiarDatos();
  }

  eliminarReserva(index: number) {
    this.listaReservas.splice(index, 1);
    alert("Eliminada correctamente");
  }

  editarReserva(reserva: any) {
    this.modoEdicion = true;
    this.reservaEdicionIndex = this.listaReservas.indexOf(reserva);
    this.reserva = { ...reserva };
  }

  limpiarDatos() {
    this.reserva = {
      nombreCliente: "",
      apellido: "",
      telefono: "",
      numeroPersonas: null,
      tipoHabitacion: "",
      fechaEntrada: null,
      fechaSalida: null,
      requerimientos: "",
      horaReserva: "",
    };
  }

  validarNombre(texto: string): boolean {
    const pattern = /^[a-zA-Z\s]+$/;
    return pattern.test(texto);
  }

  validarApellido(texto: string): boolean {
    const pattern = /^[a-zA-Z\s]+$/;
    return pattern.test(texto);
  }

  validarTelefono(telefono: string): boolean {
    const pattern = /^\d{10}$/;
    return pattern.test(telefono);
  }
}






