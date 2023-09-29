import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  linechart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3, 4, 6, 8, 10, 20]
      }
    ] as any
  })
  pieChart = new Chart({
    //   series: [25, 15, 44, 55, 41, 17],
    //   chart: {
    //     width: "100%",
    //     type: "pie"
    //   } as any
    //   labels: [
    //     "Monday",
    //     "Tuesday",
    //     "Wednesday",
    //     "Thursday",
    //     "Friday",
    //     "Saturday"
    //   ],
    //   theme: {
    //     monochrome: {
    //       enabled: true
    //     }
    //   },
    //   title: {
    //     text: "Number of leads"
    //   },
    //   responsive: [
    //     {
    //       breakpoint: 480,
    //       options: {
    //         chart: {
    //           width: 200
    //         },
    //         legend: {
    //           position: "bottom"
    //         }
    //       }
    //     }
    //   ]
  })
}

