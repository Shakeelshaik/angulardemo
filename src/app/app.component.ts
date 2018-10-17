import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to angular ';
  img = './src/app/images/food.jpg';
  styleError = 'style-error style-decor';
  classStyle = {
    "style-error": true,
    "style-success" : true,
    "style-decor" : true
  }

}
