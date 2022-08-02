import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-assigmant-solution';
  log = [1];
  hide = true;
  blue = false;

  onToggleDetails() {
    this.hide = !this.hide;
    this.log.push(this.log.length + 1);

    if (this.log.length >= 5) {
      this.blue = true;
    }
  }
}
