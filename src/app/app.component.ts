import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-assigmant-solution';
  clicks = ['cliked'];
  hide = true;
  blue = false;

  onToggleDetails() {
    this.hide = !this.hide;
    this.clicks.push('cliked');

    if (this.clicks.length >= 5) {
      this.blue = true;
    }
  }
}
