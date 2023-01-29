import { Component } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component {
   
  titulo:string='Sales';
  titulo1:string='Buy';
  doughnutChartData: ChartData<'doughnut'> = {
    
    labels:['Pan', 'Refresco', 'Tacos' ],
    datasets: [
      { 
       data: [ 250, 100, 400 ],
       backgroundColor:[
         '#2E120E','#A12900','#DFB414'
       ]
     },
      
    ]
       
  };
   
}
