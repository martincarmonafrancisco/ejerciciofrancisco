export class Producto {
  id: number;
  nombre: string;
  fecha_caducidad: Date;
  precio: number;
  tipo: string;
  cantidad: number;

  iva() {
    if (this.tipo == "alimentacion") {
      return (this.precio * 0.21 + this.precio) * this.cantidad;
    }

    if (this.tipo == "sanitario") {
      return (this.precio * 0.04 + this.precio) * this.cantidad;
    }
  }
}
