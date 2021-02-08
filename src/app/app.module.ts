import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HighchartsChartModule } from "highcharts-angular";
import { APP_BASE_HREF } from "@angular/common";
import { AppComponent } from "./app.component";
import { ProductosComponent } from "./productos/productos.component";
import { ProductoDetailComponent } from "./producto-detail/producto-detail.component";
import { ProductoService } from "./producto.service";
import { MessagesComponent } from "./messages/messages.component";
import { MessageService } from "./message.service";
import { AppRoutingModule } from "./app-routing.module";
import { Grafico01Component } from "./grafico01/grafico01.component";
import { Grafico02Component } from "./grafico02/grafico02.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  declarations: [
    AppComponent,
    ProductosComponent,
    ProductoDetailComponent,
    MessagesComponent,
    Grafico01Component,
    Grafico02Component
  ],
  bootstrap: [AppComponent],
  providers: [
    ProductoService,
    MessageService,
    { provide: APP_BASE_HREF, useValue: "/productos" }
  ]
})
export class AppModule {}
