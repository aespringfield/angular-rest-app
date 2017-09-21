import { Component, OnInit } from '@angular/core';
import { WidgetsService, Widget } from '../shared';
// import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-widgets',
    templateUrl: './widgets.component.html',
    styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
    selectedWidget: Widget = null;
    widgets: Widget[];

    constructor(private widgetsService: WidgetsService) {}

    ngOnInit() {
        this.widgets = this.widgetsService.getWidgets();
        this.reset();
    }

    reset(): void {
        this.selectedWidget = {  id: null, name: '', description: ''}
    }

    select(widget) {
        this.selectedWidget = widget;
    }

    cancel(): void {
        this.reset();
    }

    delete(widget) {
        this.widgets = this.widgets.filter(el => el.id !== widget.id);
    }

    save(widget: Widget): void {
        console.log('saving widget', widget);
        this.reset();
    }
}