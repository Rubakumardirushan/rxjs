import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RxjsComponent } from './RXJS/rxjs/rxjs.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RxjsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rxjs';
}
