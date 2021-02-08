import { Component, OnInit, Input } from "@angular/core";
import { Producto } from "../producto";
import { ProductoService } from "../producto.service";
import { MessageService } from "../message.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-producto-detail",
  templateUrl: "./producto-detail.component.html",
  styleUrls: ["./producto-detail.component.css"]
})
export class ProductoDetailComponent implements OnInit {
  // @Input() and @Output() allow Angular to share data between the parent context and child directives or components
  producto: Producto;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private location: Location,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getProducto();
  }
  save(precioP: string): void {
    const doc = {
      id: this.producto.id,
      name: this.producto.nombre,
      fecha_caducidad: new Date(this.producto.fecha_caducidad),
      precio: parseInt(precioP),
      tipo: this.producto.tipo,
      cantidad: this.producto.cantidad
    };
    this.productoService.updateProducto(doc).subscribe(() => this.goBack());
  }
  /*
  Para recuperar el documento por el Id reicibido como parámetro
  */
  getProducto(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.messageService.add(`ProductosComponent: Selected producto id=${id}`);
    this.productoService.getProducto(id).subscribe(producto => {
      const productoTmp: any = producto;
      this.producto = productoTmp;
    });
  }
  goBack(): void {
    this.location.back();
  }
}
