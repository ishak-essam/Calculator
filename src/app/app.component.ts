import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Calculator';
  resulat: any = '';
  Show(Item: any) {
    this.resulat += Item;
  }
  equal() {
    this.resulat = eval(this.resulat).toFixed(5);
  }
  clear() {
    this.resulat = '';
  }
}
