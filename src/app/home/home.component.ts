import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/items.service';
import { Item } from '../shared/item.model';
import { WidgetsComponent } from '../widgets/widgets.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  items: Item[];
<<<<<<< HEAD
  widgets: Widget[];
  currentStatus;
=======
>>>>>>> 00-start

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.itemsService.all()
      .subscribe(items => this.items = items);
  }
<<<<<<< HEAD

  getWidgets() {
    this.widgetsService.all()
      .subscribe(widgets => this.widgets = widgets);
  }

  handleResults(items) {
    this.items = items;
  }

  logout() {
    this.currentStatus = "logged out";
    console.log('logged out');
  }
=======
>>>>>>> 00-start
}
