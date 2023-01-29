import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {
  // Doughnut
  @Input() titulo:string='Sin titulo';

  @Input() doughnutChartData: ChartData<'doughnut'> = {
    
    labels:['Download Sales', 'In-Store Sales', 'Mail-Order Sales' ],
    datasets: [
      { 
       data: [ 200, 150, 100 ],
       backgroundColor:[
         '#9E120E','#FF5800','#FFB414'
       ]
     },
      
    ]
       
  };
}
