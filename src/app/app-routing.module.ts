import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductosComponent } from "./productos/productos.component";
import { ProductoDetailComponent } from "./producto-detail/producto-detail.component";
import { Grafico01Component } from "./grafico01/grafico01.component";
import { Grafico02Component } from "./grafico02/grafico02.component";

const routes: Routes = [
  { path: "productos", component: ProductosComponent },
  { path: "grafico", component: Grafico01Component },
  { path: "detail/:id", component: ProductoDetailComponent },
  { path: "graficolineas", component: Grafico02Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
