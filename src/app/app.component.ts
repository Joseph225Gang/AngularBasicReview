import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newApp';
  newApp = "App";

  handleclick() {
    console.log('hey I am  clicked in child');
  }
}
