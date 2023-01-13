import { Component } from '@angular/core';
import { dashData, tobincoTransac } from '../../raw-data/data';
import * as D3 from 'd3';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {


  interface : dashData [] = [
    {
      sessions: 'Total Transaction',
      count: 0,
      stats: 'Order',
      day: 'Today',
      icon: 'bx bx-broadcast',
    },
    {
      sessions: 'Completed Sessions',
      count: 0,
      stats: 'Completed',
      day: 'Sessions Today',
      icon: 'bx bx-gift',
    },
    {
      sessions: 'Pending Sessions',
      count: 0,
      stats: 'Feedback',
      day: 'Not Completed',
      icon: 'bx bx-directions',
    },
    {
      sessions: ' On Hold ',
      count: 0,
      stats: 'Stopped',
      day: 'by Sales Executive ',
      icon: 'bx bx-rocket',
    },
  ]

  progressions = this.interface;


  // Bar Chart for the progressive stats

  // Data for bar chart

  private tobincoPeople = [
    {
       people : 'Kofi Aponsah',
       stats : '2',
       unitId : '10202'
    },
    {
       people : 'Akwesi Benteng',
       stats : '1',
       unitId : '10202'
    },
    {
       people : 'Benard Duah',
       stats : '4',
       unitId : '10202'
    },
    {
       people : 'Kwesi Awuah',
       stats : '3',
       unitId : '10202'
    },
    {
       people : 'Kofi Narh',
       stats : '2',
       unitId : '10202'
    },
  ]

  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);


  private createSvg(): void {
    this.svg = D3.select("figure#bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}


private drawBars(data: any[]): void {
  // Create the X-axis band scale
  const x = D3.scaleBand()
  .range([0, this.width])
  .domain(data.map(d => d.people))
  .padding(0.2);

  // Draw the X-axis on the DOM
  this.svg.append("g")
  .attr("transform", "translate(0," + this.height + ")")
  .call(D3.axisBottom(x))
  .selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-45)")
  .style("text-anchor", "end");

  // Create the Y-axis band scale
  const y = D3.scaleLinear()
  .domain([0, 10])
  .range([this.height, 0]);

  // Draw the Y-axis on the DOM
  this.svg.append("g")
  .call(D3.axisLeft(y));

  // Create and fill the bars
  this.svg.selectAll("bars")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d: any) => x(d.people))
  .attr("y", (d: any) => y(d.stats))
  .attr("width", x.bandwidth())
  .attr("height", (d: any) => this.height - y(d.stats))
  .attr("fill", "#d04a35");
}

ngOnInit(): void {
  this.createSvg();
  this.drawBars(this.tobincoPeople);
}
}
