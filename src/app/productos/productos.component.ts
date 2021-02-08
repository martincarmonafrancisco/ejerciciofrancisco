import { Component, OnInit } from "@angular/core";
import { Producto } from "../producto";
import { ProductoService } from "../producto.service";
import { MessageService } from "../message.service";

@Component({
  selector: "app-productos",
  templateUrl: "./productos.component.html",
  styleUrls: ["./productos.component.css"]
})
export class ProductosComponent implements OnInit {
  productos: Producto[];
  productosApi = null;
  productoTmp: any;

  constructor(
    private productoService: ProductoService,
    private messageService: MessageService
  ) {}

  getProductosApi() {
    this.messageService.add("Hola en getProductosApi");
    this.productoService.getProductosApi().subscribe(productos => {
      this.productosApi = productos;
      this.productos = this.productosApi;
    });
  }

  delete(producto: Producto): void {
    /* filter crea otro array filtrando los elementos que sean distintos de el "hero" recibido.
    Se trata de que el array en memoria conincida con el server
    */
    this.productos = this.productos.filter(h => h !== producto);
    this.productoService.deleteProducto(producto).subscribe();
  }

  add(
    nombreP: string,
    precioP: string,
    cantidadP: string,
    fecha_caducidadP: string,
    tipoP: string
  ): void {
    const nombreV = nombreP.trim();
    const precioV = parseInt(precioP);
    const cantidadV = parseInt(cantidadP);
    const fecha_caducidadV = new Date(fecha_caducidadP);
    const tipoV = tipoP;
    if (!nombreP) {
      return;
    }
    const newDoc: any = {
      nombre: nombreV,
      precio: precioV,
      cantidad: cantidadV,
      fecha_caducidad: fecha_caducidadV,
      tipo: tipoV
    };
    this.productoService.addProducto(newDoc).subscribe(producto => {
      this.productoTmp = producto;
      this.productos.push(this.productoTmp);
    });
  }

  ngOnInit() {
    this.getProductosApi();
  }
}
