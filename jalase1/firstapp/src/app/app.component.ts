import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CustomerComponent } from './customer.component';


@Component({
  selector: 'app-root',
  standalone: true,// require ng module
  imports: [CommonModule, RouterOutlet, CustomerComponent], // dependency
  // template: `<h1> hello world</h1>`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'Reza Gholamalitabar Programming CV';
  title = "first app"
  name = "hasan hasani"
}
