import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { ProductoService } from "../producto.service";

@Component({
  selector: "app-grafico01",
  templateUrl: "./grafico01.component.html",
  styleUrls: ["./grafico01.component.css"]
})
export class Grafico01Component implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    title: {
      text: "Gráfico de barras"
    },
    chart: {
      type: "column"
    },
    xAxis: {
      categories: [],
      title: {
        text: "Productos"
      }
    },
    yAxis: {
      accessibility: {},
      title: {
        text: "Precios en €"
      }
    },

    series: [
      {
        type: "column",
        data: [],
        name: "Precio en €"
      }
    ],
    noData: {
      style: {
        fontWeight: "bold",
        fontSize: "15px",
        color: "#303030"
      }
    }
  };

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    //  this.getHeroesApi();
    this.getMisDatos();
  }

  /*
Estructura:
{
id: "5",
name: "Bode.",
salary: 84909,
}
  */

  getMisDatos() {
    this.productoService.getProductosApi().subscribe(
      result => {
        const misDatos: any = result;
        const dataSeries = misDatos.map((x: any) => x.precio);
        const dataCategorias = misDatos.map((x: any) => x.nombre);
        this.chartOptions.series[0]["data"] = dataSeries;
        this.chartOptions.xAxis["categories"] = dataCategorias;
        Highcharts.chart("miGrafico01", this.chartOptions);
      },
      error => console.log(error)
    );
  }
}
