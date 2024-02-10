import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

export interface data {
  [key: string]: any;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CanvasJSAngularChartsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements data {
  chart: any;
  isButtonVisible = false;

  visitorsChartDrilldownHandler = (e: any) => {
    this.chart.options = this.visitorsDrilldownedChartOptions;
    this.chart.options.data = this.options[e.dataPoint.name];
    this.chart.options.title = { text: e.dataPoint.name };
    this.chart.render();
    this.isButtonVisible = true;
  };

  visitorsDrilldownedChartOptions = {
    animationEnabled: true,
    theme: 'light2',
    axisY: {
      gridThickness: 0,
      lineThickness: 1,
    },
    data: [],
  };

  newVSReturningVisitorsOptions = {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: 'Monthly Energy Bill',
    },
    subtitles: [
      {
        text: 'Click on Any Segment to Drilldown',
        backgroundColor: '#2eacd1',
        fontSize: 16,
        fontColor: 'white',
        padding: 5,
      },
    ],
    data: [],
  };

  options: data = {
    'New vs Returning Visitors': [
      {
        type: 'column',
        name: 'Monthly Energy Bill ',
        startAngle: 90,
        cursor: 'pointer',
        explodeOnClick: false,
        showInLegend: true,
        legendMarkerType: 'square',
        click: this.visitorsChartDrilldownHandler,
        indexLabelPlacement: 'inside',
        indexLabelFontColor: 'white',
        dataPoints: [
          {
            label: 'Feb-22',
            y: 71.2,
            name: 'February Energy Bill',
            color: '#058dc7',
            indexLabel: '$ 71.20',
          },
          {
            label: 'Mar-22',
            y: 78.3,
            name: 'March Energy Bill',
            color: '#50b432',
            indexLabel: '$ 78.30',
          },
          {
            label: 'Apr-22',
            y: 85.9,
            name: 'April Energy Bill',
            color: '#058dc7',
            indexLabel: '$ 85.90',
          },
          {
            label: 'May-22',
            y: 99.4,
            name: 'May Energy Bill ',
            color: '#50b432',
            indexLabel: '$ 99.40',
          },
          {
            label: 'Jun-22',
            y: 154.2,
            name: 'June Energy Bill',
            color: '#058dc7',
            indexLabel: '$ 154.20',
          },
          {
            label: 'Jul-22',
            y: 179.8,
            name: 'July Energy Bill',
            color: '#50b432',
            indexLabel: '$ 179.80',
          },
          {
            label: 'Aug-22',
            y: 202.2,
            name: 'August Energy Bill',
            color: '#058dc7',
            indexLabel: '$ 202.20',
          },
          {
            label: 'Sep-22',
            y: 164.9,
            name: 'September Energy Bill',
            color: '#50b432',
            indexLabel: '$ 164.90',
          },
          {
            label: 'Oct-22',
            y: 101.0,
            name: 'October Energy Bill',
            color: '#058dc7',
            indexLabel: '$ 101.00',
          },
          {
            label: 'Nov-22',
            y: 95.1,
            name: 'November Energy Bill',
            color: '#50b432',
            indexLabel: '$ 95.10',
          },
          {
            label: 'Dec-22',
            y: 98.8,
            name: 'December Energy Bill',
            color: '#058dc7',
            indexLabel: '$ 98.80',
          },
          {
            label: 'Jan-22',
            y: 71.2,
            name: 'january Energy Bill',
            color: '#50b432',
            indexLabel: '$ 71.20',
          },
        ],
      },
    ],
    'February Energy Bill': [
      {
        color: '#058dc7',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 43.23 },
          { label: 'Dryer', y: 8.54 },
          { label: 'Range', y: 4.27 },
          { label: 'Kitchen', y: 3.56 },
          { label: 'BedRoom 1', y: 4.27 },
          { label: 'Living Room', y: 3.2 },
          { label: 'BedRoom 2', y: 3.92 },
        ],
      },
    ],
    'March Energy Bill': [
      {
        color: '#50b432',
        name: 'Returning Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y:  47.76 },
          { label: 'Dryer', y: 9.40  },
          { label: 'Range', y:  4.70  },
          { label: 'Kitchen', y:  3.92  },
          { label: 'BedRoom 1', y:  4.70  },
          { label: 'Living Room', y:  3.52  },
          { label: 'BedRoom 2', y:  4.31  },
        ],
      },
    ],
    'April Energy Bill': [
      {
        color: '#058dc7',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y:  53.26  },
          { label: 'Dryer', y:  9.45  },
          { label: 'Range', y:  5.15  },
          { label: 'Kitchen', y:  4.30  },
          { label: 'BedRoom 1', y:  5.15  },
          { label: 'Living Room', y:  3.87  },
          { label: 'BedRoom 2', y:  4.72  },
        ],
      },
    ],
    'May Energy Bill': [
      {
        color: '#058dc7',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y:  62.62  },
          { label: 'Dryer', y:  9.94  },
          { label: 'Range', y:  5.96  },
          { label: 'Kitchen', y:  4.97  },
          { label: 'BedRoom 1', y:  5.96  },
          { label: 'Living Room', y:  4.47  },
          { label: 'BedRoom 2', y:  5.47  },
        ],
      },
    ],
    'June Energy Bill': [
      {
        color: '#058dc7',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y:  102.54  },
          { label: 'Dryer', y:  13.88 },
          { label: 'Range', y:  7.71 },
          { label: 'Kitchen', y:  6.17 },
          { label: 'BedRoom 1', y: 9.25 },
          { label: 'Living Room', y: 6.94 },
          { label: 'BedRoom 2', y: 7.71 },
        ],
      },
    ],
    'July Energy Bill': [
      {
        color: '#058dc7',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 124.06 },
          { label: 'Dryer', y: 16.18 },
          { label: 'Range', y: 8.99 },
          { label: 'Kitchen', y: 7.19 },
          { label: 'BedRoom 1', y: 7.19 },
          { label: 'Living Room', y: 7.19 },
          { label: 'BedRoom 2', y: 8.99 },
        ],
      },
    ],
    'August Energy Bill': [
      {
        color: '#058dc7',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 137.43 },
          { label: 'Dryer', y: 18.19 },
          { label: 'Range', y: 10.11 },
          { label: 'Kitchen', y: 8.08 },
          { label: 'BedRoom 1', y: 10.11 },
          { label: 'Living Room', y: 8.08 },
          { label: 'BedRoom 2', y: 10.11 },
        ],
      },
    ],
    'September Energy Bill': [
      {
        color: '#058dc7',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 112.13 },
          { label: 'Dryer', y: 14.84 },
          { label: 'Range', y: 8.25 },
          { label: 'Kitchen', y: 6.60 },
          { label: 'BedRoom 1', y: 6.60 },
          { label: 'Living Room', y: 7.42 },
          { label: 'BedRoom 2', y: 9.07 },
        ],
      },
    ],
    'October Energy Bill': [
      {
        color: '#058dc7',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 62.62 },
          { label: 'Dryer', y: 11.11 },
          { label: 'Range', y: 6.06 },
          { label: 'Kitchen', y: 5.05 },
          { label: 'BedRoom 1', y: 6.06 },
          { label: 'Living Room', y: 4.55 },
          { label: 'BedRoom 2', y: 5.56 },
        ],
      },
    ],
    'November Energy Bill': [
      {
        color: '#058dc7',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 58.96 },
          { label: 'Dryer', y: 10.46 },
          { label: 'Range', y: 5.71 },
          { label: 'Kitchen', y: 4.76 },
          { label: 'BedRoom 1', y: 5.71 },
          { label: 'Living Room', y: 4.28 },
          { label: 'BedRoom 2', y: 5.23 },
        ],
      },
    ],
    'December Energy Bill': [
      {
        color: '#058dc7',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 60.27 },
          { label: 'Dryer', y: 11.86 },
          { label: 'Range', y: 5.93 },
          { label: 'Kitchen', y: 4.94 },
          { label: 'BedRoom 1', y: 5.93 },
          { label: 'Living Room', y: 4.45 },
          { label: 'BedRoom 2', y: 5.43 },
        ],
      },
    ],
    'january Energy Bill': [
      {
        color: '#058dc7',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 43.23 },
          { label: 'Dryer', y: 8.54 },
          { label: 'Range', y: 4.27 },
          { label: 'Kitchen', y: 3.56 },
          { label: 'BedRoom 1', y: 4.27 },
          { label: 'Living Room', y: 3.2 },
          { label: 'BedRoom 2', y: 3.92 },
        ],
      },
    ],
  };
  chartOptions: any;

  handleClick(event: Event) {
    this.chart.options = this.newVSReturningVisitorsOptions;
    this.chart.options.data = this.options['New vs Returning Visitors'];
    this.chart.render();
    this.isButtonVisible = false;
  }

  getChartInstance(chart: object) {
    this.chart = chart;
    this.chart.options = this.newVSReturningVisitorsOptions;
    this.chart.options.data = this.options['New vs Returning Visitors'];
    this.chart.render();
  }
}
