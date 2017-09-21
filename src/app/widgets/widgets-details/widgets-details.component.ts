import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Widget } from '../../shared';

@Component({
  selector: 'app-widgets-details',
  templateUrl: './widgets-details.component.html',
  styleUrls: ['./widgets-details.component.css']
})
export class WidgetsDetailsComponent implements OnInit {
  selectedWidget: Widget;

  @Input() set widget(value: Widget) {
    this.selectedWidget = Object.assign({}, value);
  };
  @Input() canceled = new EventEmitter();

  @Output() selected = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
