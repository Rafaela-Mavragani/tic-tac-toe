import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseComponentComponent } from './components/base-component/base-component.component';

@Component({
  selector: 'app-root',
  imports: [BaseComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tic-tac-toe';
}
