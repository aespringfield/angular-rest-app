import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from '../../shared';

@Component({
  selector: 'app-widgets-details',
  templateUrl: './widgets-details.component.html',
  styleUrls: ['./widgets-details.component.css']
})
export class WidgetsDetailsComponent {
  selectedWidget: Widget;
  
  @Output() canceled = new EventEmitter();
  @Output() saved = new EventEmitter();

  @Input() set widget(value: Widget) {
    this.selectedWidget = Object.assign({}, value);
  };

}
