import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { ProductoService } from "../producto.service";

@Component({
  selector: "app-grafico02",
  templateUrl: "./grafico02.component.html",
  styleUrls: ["./grafico02.component.css"]
})
export class Grafico02Component implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    title: {
      text: "Gráfico de líneas"
    },
    yAxis: {
      accessibility: {},
      title: {
        text: "Cantidad"
      }
    },
    colors: ["#FF0400"],
    xAxis: {
      accessibility: {},
      title: {
        text: "Productos"
      }
    },
    series: [
      {
        type: "area",
        data: [],
        name: "Cantidad",
        lineColor: "#FF0400"
      }
    ],

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      backgroundColor: "#FF04"
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
        const dataSeries = misDatos.map((x: any) => x.cantidad);
        const dataCategorias = misDatos.map((x: any) => x.nombre);
        this.chartOptions.series[0]["data"] = dataSeries;
        this.chartOptions.xAxis["categories"] = dataCategorias;
        Highcharts.chart("miGrafico02", this.chartOptions);
      },
      error => console.log(error)
    );
  }
}
